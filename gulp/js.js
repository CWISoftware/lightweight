// require common
var common = require('./common.js');

/*
 * Unify, minify and concatenates all javascripts.
 */
common.gulp.task('js', function() {
  common.gulp.src(common.dirs.js.path)
    .pipe(common.gulp_flatten())
    .pipe(common.gulp_concat('lightweight.js'))
    .pipe(common.gulp.dest(common.dirs.dist.path))
    .pipe(common.gulp_concat('lightweight.min.js'))
    .pipe(common.gulp_uglify({ beautify: true }))
    .pipe(common.gulp.dest(common.dirs.dist.path));
});
