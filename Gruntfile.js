module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            styleguide: {
                files: {
                    'css/styleguide.css' : 'less/styleguide.less'
                }
            }
        },
        jshint: {
            files: ['grunt.js', 'js/*.js'],
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                quotmark: "single",
                regexp: true,
                undef: true,
                unused: true,
                trailing: true,
                browser: true,
                jquery: true
            }
        },
        csslint: {
            base_theme: {
                src: "css/styleguide.css",
                rules: {
                    "empty-rules": 2,
                    "fallback-colors": 2,
                    "font-sizes": 2,
                    "important": 2,
                    "outline-none": 2,
                    "vendor-prefix": 2,
                    "zero-units": 2
                }
            }
        },
        connect: {
            uses_defaults: {}
        },
        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: ['less:styleguide']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less:styleguide']);
    grunt.registerTask('lintify', ['less:styleguide', 'jshint', 'csslint']);
    grunt.registerTask('dev-docs', ['less:styleguide', 'connect', 'watch']);
};
