module.exports = function(grunt) {

    grunt.initConfig({
        clean: ['css', 'django/sandstone/static/', 'django/sandstone/templates/'],
        less: {
            build: {
                files: {
                    'css/lib/sandstone-resp.css' : 'less/sandstone-resp.less',
                    'css/lib/tabzilla.css' : 'less/tabzilla.less'
                }
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    src: ['css/**/*.css', 'fonts/*', 'js/**'],
                    dest: 'django/sandstone/static/sandstone/'
                },
                {
                    expand: true,
                    cwd: 'media/img/',
                    src: ['**'],
                    dest: 'django/sandstone/static/sandstone/img/'
                },
                {
                    expand: true,
                    cwd: 'templates/',
                    src: ['*.html'],
                    dest: 'django/sandstone/templates/sandstone/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', 'less:sandstone');
    grunt.registerTask('release', ['clean', 'less:build', 'copy:build']);
};
