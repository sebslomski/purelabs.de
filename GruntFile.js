module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        files: {
            less: 'less/main.less',
        },

        less: {
            dev: {
                files: {
                    'css/build.css': '<%= files.less %>'
                }
            },
            prod: {
                options: {
                    compress: true
                },
                files: {
                    'css/build.css': '<%= files.less %>'
                }
            }
        },

        jekyll: {
            dev: {
                src: '.',
                dest: 'dist',
                server: true,
                watch: true
            },
            prod: {
                src: '.',
                dest: 'dist'
            }
        },

        watch: {
            files: ['less/**/*.less'],
            tasks: 'less:dev'
        },
    });


    grunt.event.on('watch', function(action, filepath) {
        //grunt.task.run('jekyll:prod');
    });


    grunt.registerTask('default', ['less:dev']);
    grunt.registerTask('serve', ['less:dev', 'jekyll:dev']);
    grunt.registerTask('production', ['less:prod', 'jekyll:prod']);
};
