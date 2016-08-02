module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
              name: 'small',
              width: 320,
              height: 240,
              suffix: '_small',
              quality: 30
          },
              {
                  name: 'medium',
                  width: 640,
                  height: 420,
                  suffix: '_med',
                  quality: 30
              },
              {
                  name: 'large',
                  width: 1024,
                  height: 700,
                  suffix: '_large',
                  quality: 50
              },
              {
                  name: 'Llarge',
                  width: 1200,
                  height: 800,
                  suffix: '_2xlarge',
                  quality: 70
              }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
