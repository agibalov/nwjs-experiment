module.exports = function(grunt) {
  grunt.initConfig({
    buildDir: './build',
    nwjs: {
      options: {
        platforms: ['linux', 'win'],
        buildDir: '<%= buildDir %>'
      },
      src: [
        './package.json',
        './index.html',
        './bower_components/**/*'
      ]
    },
    clean: {
      build: ['<%= buildDir %>']
    }
  });

  grunt.loadNpmTasks('grunt-nw-builder');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['nwjs']);
};
