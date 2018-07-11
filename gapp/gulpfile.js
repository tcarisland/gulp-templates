const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
 -- TOP LEVEL FUNCTIONS --
 gulp.task - Define tasks
 gulp.src - Point to files to use
 gulp.dest - Points to folder to output
 gulp.watch - Watch filesand folders for changes
*/

//Default task
gulp.task('default', ['message', 'imageMin', 'copyHtml', 'sass', 'scripts']);

// Logs Message
gulp.task('message', function() {
  return console.log('Gulp is running ... ');
});

// Optimize images
gulp.task('imageMin', function() {
  gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

// Copy ALL HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});


// Compile Sass
gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
});

// Scripts
gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*', ['copyHtml']);
});
