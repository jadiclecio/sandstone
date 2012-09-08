module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            sandstone: {
                src: 'media/css/sandstone/sandstone.less',
                dest: 'media/css/sandstone.css'
            },
            sandstone_resp: {
                src: 'media/css/sandstone/sandstone-resp.less',
                dest: 'media/css/sandstone-resp.css'
            }
        },
        lint: {
            files: ['grunt.js', 'media/js/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-less');

    grunt.registerTask('default', 'less');
};
