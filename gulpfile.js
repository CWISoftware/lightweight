'use strict';

var common = require('./gulp/common.js');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
common.gulp_wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

/**
 * Clean lanuch clean temporaries directories
 */
common.gulp.task('clean', function() {
  return common.gulp.src([
    common.dirs.dist.path
  ]).pipe(common.gulp_clean({ force: true }));
});

/**
 * Bower task launch bower install
 */
common.gulp.task('bower', function() {
  return common.gulp_bower()
    .pipe(common.gulp.dest(common.dirs.bower));
});

/**
 *  Default launch build
 */
common.gulp.task('default', function () {
  common.gulp.start(['build']);
});
