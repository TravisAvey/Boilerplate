module.exports = function(grunt) {
    // config goes here:
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: 'js/*.js',
                dest: 'js/build/production.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "css/style.css": "css/style.scss"
                }
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        imagemin : {
            dynamic : {
                files : [{
                    expand: true,
                    cwd: 'img/',
                    src: ['img/*.{png,jpg,gif}'],
                    dest: 'img/build/'
                }]
            }
        },
        watch: {
            css: {
                files: ['css/*.scss', 'css/pages/*scss'],
                tasks: ['sass'],
                options: {
                    liveReload: true
                }
            },
            scripts: {
                files: 'js/*.js',
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Tell grunt to use plugins:
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // where we tell grunt what to do when we type grunt in command line
    grunt.registerTask('default', ['concat', 'sass', 'uglify', 'imagemin', 'watch']);

};