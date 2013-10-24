$(function() {
    if ($('html').hasClass('no-touch')) {
        var $header = $('#header');
        var $stickyBar = $('#sticky-bar');
        var $headerLogo = $('#header-logo');
        var $headerName = $('#header-name');
        var headerLogoMinHeight = 50;
        var headerLogoMaxHeight = 70;
        var headerMaxHeight = $header.height();

        $(window).scroll(function(e) {
            var scrollValue = $(window).scrollTop();
            var rotate = scrollValue * 2;
            if (rotate > 360) {
                rotate = 360;
            }
            var translateValue = 'rotate(' + rotate + 'deg) translateZ(0)';

            var percentage = (rotate * 100) / 240;
            if (percentage > 100) {
                percentage = 100;
            }

            var heightDiff = headerLogoMaxHeight - headerLogoMinHeight;
            var heightDiff = Math.floor(heightDiff * percentage / 100);
            headerLogoHeight = headerLogoMinHeight + heightDiff;

            if (rotate >= 360) {
                headerLogoHeight = headerLogoMaxHeight;
            } else if (rotate <= 0) {
                headerLogoHeight = headerLogoMinHeight;
            }

            $headerLogo.css({
                transform: translateValue,
            });

            $headerName.css({
                opacity: 1 - (percentage / 100),
                height: 20 - heightDiff
            });

            $header.css({
                height: headerMaxHeight - heightDiff
            });
      });
    }
});
