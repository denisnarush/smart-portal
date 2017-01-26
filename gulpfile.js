/*global require, console*/

var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    prettify = require('gulp-html-prettify');

var ccm = require('./ccm/ccm');
var ccmGulp = require('./ccm/ccm-gulp');

gulp.watch('./pages/*.json').on('change', function (event) {  
  // event.type : added, changed, or deleted
  console.log(event.type + ' ' + event.path);

  if (event.type !== 'deleted') {
    // compile
    ccm(undefined, event.path);
  }
});


gulp.watch('./pages/*.less').on('change', function (event) {  
  // event.type : added, changed, or deleted
  console.log(event.type + ' ' + event.path);

  if (event.type !== 'deleted') {
    gulp.src(event.path)
      .pipe(less())
      .pipe(gulp.dest('./pages'));
  }
});


gulp.watch('./blocks/**/*.less').on('change', function (event) {  
  // event.type : added, changed, or deleted
  console.log(event.type + ' ' + event.path);

  if (event.type !== 'deleted') {
    gulp.src('./pages/*.less')
      .pipe(less())
      .pipe(gulp.dest('./pages'));
  }
});

gulp.task('compile', function () {
  gulp.src('./pages/*.json')
    .pipe(ccmGulp());
});
 
gulp.task('templates', function() {
  gulp.src('./pages/*.html')
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./pages/'))
});

gulp.task('default', ['compile', 'templates']);