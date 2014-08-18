'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-sg-release');

    grunt.initConfig({
        sg_release: {
            options: {
                skipBowerInstall: true,
                files: ['package.json', 'README.md'],
                commitFiles: ['-a'],
                pushTo: 'origin'
            }
        }
    });

    grunt.registerTask('release', [
        'sg_release'
    ]);

};
