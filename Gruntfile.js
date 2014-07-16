module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [
                    'public/javascripts/local/*', 'public/javascripts/local/*'
                ],
                dest: 'public/javascripts/main.min.js'
            },
            bootstrap:{
                src:'public/javascripts/bootstrap/*.js',
                dest: 'public/javascripts/bootstrap.min.js'
            },
            vendors:{
                src:'public/javascripts/vendors/*.js',
                dest:'public/javascripts/vendors.min.js'
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'public/javascripts/main.min.js': ['public/javascripts/main.min.js'],
                    'public/javascripts/bootstrap.min.js': ['public/javascripts/bootstrap.min.js'],
                    'public/javascripts/vendors.min.js' : ['public/javascripts/vendors.min.js']
                }
            }
        } ,
        watch: {
            js: {
                files: ['public/javascripts/local/*',
                        'public/javascripts/bootstrap/*.js',
                        'public/javascripts/vendors/*.js'
                ],
                tasks: ['concat', 'uglify']
            },
            sass: {
                files: ['**/*.scss'],
                tasks: ['compass']

            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default', ['concat:js','concat:bootstrap','concat:vendors','uglify:js','compass']);
};
