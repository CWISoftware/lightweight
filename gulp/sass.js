// require common
var common = require('./common.js');

/*
 * unify and minify all sass.
 */
common.gulp.task('sass', function() {
  var stream = common.gulp.src(common.dirs.sass.path)
    .pipe(common.gulp_sass({
      includePaths: [
        common.dirs.bower
      ],
      errLogToConsole: true
    }));

  stream
    .pipe(common.gulp_flatten())
    .pipe(common.gulp_concat('lightweight.css'))
    .pipe(common.gulp.dest(common.dirs.dist.path));

  stream
    .pipe(common.gulp_flatten())
    .pipe(common.gulp_cssmin())
    .pipe(common.gulp_concat('lightweight.min.css'))
    .pipe(common.gulp.dest(common.dirs.dist.path));
});
