const gulp = require('gulp')

gulp.task('default', ['html', 'scripts', 'stylesheets']);

gulp.task('stylesheets', function() {
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
  .pipe(gulp.dest('.'));

  gulp.src('node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./js'));

  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
  .pipe(gulp.dest('./js'));

  gulp.src('src/js/menu.js')
  .pipe(gulp.dest('./js'));

});

gulp.task('html', function() {

    gulp.src('src/*.html')
	.pipe(gulp.dest('.'));

});
