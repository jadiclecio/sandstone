module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            sandstone: {
                src: 'css/sandstone/sandstone.less',
                dest: 'css/sandstone.css'
            },
            sandstone_resp: {
                src: 'css/sandstone/sandstone-resp.less',
                dest: 'css/sandstone-resp.css'
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

    grunt.loadNpmTasks('grunt-less');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default', 'less');
    grunt.registerTask('lintify', 'lint csslint');
};
