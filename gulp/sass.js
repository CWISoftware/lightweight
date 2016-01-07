// require common
var common = require('./common.js');

/*
 * unify and minify all sass.
 */
common.gulp.task('sass', function() {
  var stream = common.gulp_sass('./sass/lightweight.scss', {
    compass: true,
    bundleExec: true,
    sourcemap: true,
    loadPath: [
      './bower_components/normalize-scss/'
    ]
  });

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
