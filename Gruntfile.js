module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    transpile: {
      amd: {
        type: 'amd',
        files: { 'skiplist.amd.js': 'skiplist.js' }
      }
    },
    watch: {
      all: {
        files: 'skiplist.js',
        tasks: ['build']
      }
    },
    jshint: {
      all: 'skiplist.js',
      options: {
        jshintrc: '.jshintrc'
      }
    },
    qunit: {
      all: 'test/index.html'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  this.registerTask('default', ['test']);
  this.registerTask('build', ['jshint','transpile']);
  this.registerTask('test', ['build', 'qunit']);
};
