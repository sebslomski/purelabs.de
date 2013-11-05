$(function() {
    var $header = $('.header');
    $header.css({
        height: $(window).height()
    });

    var $nav = $('.navigation');
    $nav.css({
        'margin-top': -1 * ($nav.height() / 2)
    });


    $nav.find('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var $targetElem = $($(this).attr('href'));
        $(window).scrollTo($targetElem.position().top - 100, 1000);
    });

    if (window.location.hash) {
        var $targetElem = $(window.location.hash);
        $(window).scrollTo($targetElem.position().top - 100, 1000);
    }


    var waypointHandler = function(direction) {
        return function(dir) {
            if (dir === direction) {
                $nav.find('li').removeClass('s-is-selected');
                var $current = $nav.find('a[href^="#' + this.id + '"]');
                $current.parent().addClass('s-is-selected');

                var color = '#00afce';

                if (this.id === 'hello') {
                    color = '#fff';
                }

                $nav.find('a').css({
                    color: color
                });
            }
        };
    };

    $('.content > section, .header')
        .waypoint({
            offset: '50%',
            handler: waypointHandler('down')
        })
        .waypoint({
            offset: function() {
                var contextHeight = $.waypoints('viewportHeight') / 2;
                return contextHeight - $(this).outerHeight();
            },
            handler: waypointHandler('up')
        });

    $('#hello').parallax('50%', 0.4);


    var headerSubtitle = 'Pushing  pixels   to      shift   bits'.split('');
    var $headerSubtitle = $('#header-subtitle');
    var currentHeaderSubtitle = '';

    setTimeout(function() {
        var headerSubtitleInterval = setInterval(function() {
            var c = headerSubtitle.splice(0, 1)[0];
            if (c !== undefined) {
                currentHeaderSubtitle += c;
                $headerSubtitle.html(currentHeaderSubtitle);
            } else {
                clearInterval(headerSubtitleInterval);
            }
        }, 70);

    }, 1200);
});
