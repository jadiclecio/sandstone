module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            sandstone_dev: {
                files: {
                    'css/sandstone-resp.css' : 'css/sandstone/sandstone-resp.less'
                }
            },
            sandstone_prod: {
                options: {
                    compress: true
                },
                files: {
                    'css/sandstone-resp.min.css' : 'css/sandstone/sandstone-resp.less'
                }
            }
        },
        lint: {
            files: ['grunt.js', 'js/*.js']
        },
        csslint: {
            base_theme: {
                src: "css/*.css"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default', 'less:sandstone_dev');
    grunt.registerTask('lintify', 'lint csslint');
    grunt.registerTask('prep_prod', 'less:sandstone_prod lintify');
};
