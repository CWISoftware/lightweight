'use strict';

// export common require
exports.gulp               = require('gulp');
exports.gulp_util          = require('gulp-util');
exports.gulp_concat        = require('gulp-concat');
exports.gulp_uglify        = require('gulp-uglify');
exports.gulp_sass          = require('gulp-sass');
exports.gulp_clean         = require('gulp-clean');
exports.gulp_bower         = require('gulp-bower');
exports.gulp_watch         = require('gulp-watch');
exports.gulp_cssmin        = require('gulp-cssmin');
exports.gulp_sourcemaps    = require('gulp-sourcemaps');
exports.gulp_rename        = require('gulp-rename');
exports.gulp_filter        = require('gulp-filter');
exports.gulp_flatten       = require('gulp-flatten');
exports.gulp_debug         = require('gulp-debug');
exports.gulp_useref        = require('gulp-useref');
exports.gulp_if            = require('gulp-if');
exports.gulp_argv          = require('yargs').argv;
exports.gulp_wrench        = require('wrench');

// export common dirs
exports.dirs = {
  bower: './bower_components/',
  js: {
    path: [
      './js/*.js',
      './js/**/*.js'
    ]
  },
  sass: {
    path: [
      './sass/*.{css,sass,scss}',
      './sass/**/*.{css,sass,scss}'
    ]
  },
  dist: {
    path: './dist/'
  }
};

// export common logger
exports.log = function(log) {
  this.gulp_util.log(log);
};
