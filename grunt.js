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
        }
    });

    grunt.loadNpmTasks('grunt-less');

    grunt.registerTask('default', 'less');
};
