module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		connect: {
			develop: {
				port: 9000,
				base: '.'
			}
		},
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'test/spec/*Spec.js',
          helpers: 'test/spec/*Helper.js'
        }
      }
    },
    cucumberjs: {
      options: {
        format: 'pretty', //html
        output: 'test/features/cucumberReport.html',
        theme: 'bootstrap'
      },
      features : ["test/features/**/*.feature"]
    },
    shell: {
      startServer: {
        command: 'grunt connect:develop',
        options: {
          async: true
        }
     }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-cucumberjs');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-shell-spawn');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);



  grunt.registerTask('fullTest', ['jasmine','shell:startServer','cucumberjs']);


};
