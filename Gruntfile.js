module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      release: {
        src: ['js/values.js', 'js/prompt.js', 'js/getImages.js',
              'js/replaceImages.js', 'js/main.js'],
        dest: 'release/main.js'
      }
    },
    copy: {
      release: {
        src: 'manifest.json',
        dest: 'release/manifest.json'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: ['release/main.js']
    },
    jsdoc: {
      dist: {
        src: ['js/*.js'],
        dest: 'doc'
      }
    },
    jasmine: {
      test: {
        src: ['js/values.js', 'js/prompt.js', 'js/getImages.js',
              'js/replaceImages.js', 'js/main.js'],
        options: {
          specs: 'test/*.js',
        }
      }
    },
    watch: {
      files: ['js/*.js', 'manifest.json'],
      tasks: ['default']
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-jsdoc');

  // Register tasks
  grunt.registerTask('default', ['concat', 'jshint', 'copy']);
};
