module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.initConfig({
    bowercopy: {
        options: {
        },
        js: {
          options: {
            destPrefix: 'js/vendor'
          },
          files: {
            'jquery.js' : 'jquery/jquery.js',
            'todomvc-common.js' : 'todomvc-common/base.js',
            'underscore.js' : 'underscore/underscore.js',
            'backbone.js' : 'backbone/backbone.js'
          }
        },
        css: {
          files: {
            'css/vendor/todomvc-common.css':'todomvc-common/base.css'
          }
        }
      }
  });

  grunt.registerTask('default', ['bowercopy']);

};
