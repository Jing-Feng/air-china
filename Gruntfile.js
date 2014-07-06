module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // jshint: {
    //   files: ['Gruntfile.js', 'src/**/*.js'],
    //   options: {
    //     globals: {
    //       jQuery: true,
    //       console: true,
    //       module: true,
    //       document: true
    //     }
    //   }
    // },
    // concat: {
    //   options: {
    //     separator: ''
    //   },
    //   dist: {
    //     src: ['src/js/data/**/*.js', 'src/js/effect/**/*.js'],
    //     dest: 'dist/js/<%= pkg.name %>.js'
    //   },
    //   mainless: {
    //     src: ['src/less/html/**/*.less'],
    //     dest: 'src/less/<%= pkg.name %>.less'
    //   }
    // },
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    //   },
    //   dist: {
    //     files: {
    //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    //     }
    //   }
    // },
    less: {
      common: {
        options: {
          compress: true,
          yuicompress: true
        },
        files: {
          'css/common.css': 'less/common.less'
        }
      },
      content: {
        options: {
          compress: true,
          yuicompress: true
        },
        files: {
          'css/<%= pkg.name %>.min.css': 'less/gh.less'
        }
      }
    },
    watch: {
      less: {
        files: ['less/**/*.less'],
        tasks: ['less']
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-concat');

  //grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['less', 'watch']);

};
// qunit: {
//   files: ['test/**/*.html']
// },