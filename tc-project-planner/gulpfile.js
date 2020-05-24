const gulp   = require('gulp');
const watch  = require('gulp-watch');
const ftp    = require('vinyl-ftp');
const prompt = require('prompt');

var login = require('./login.json');
var globs = [ 'dist/*', 'dist/**' ];

gulp.task('deploy', function() {
  const conn = ftp({
	host: login.host,
	user: login.user,
	password: login.pass,
	port: login.port,
	parallel: 10,
	reload: true
  });
  return gulp.src(globs, { base: './dist', buffer: false } ).pipe(conn.dest('/www/wp-content/plugins/tc-project-planner'));
});

gulp.task('copy-php', function() {
    return gulp.src(['src/**/*.php']).pipe(gulp.dest('dist/'));
});

gulp.task('copy-css', function() {
    return gulp.src('src/*.css').pipe(gulp.dest('dist/'));
});


gulp.task('copy-js', function() {
    return gulp.src('src/js/*.js').pipe(gulp.dest('dist/js/'));
});


gulp.task('watch', function() {
  return gulp.watch(['src/*', 'src/**/*'], gulp.series(['copy-php', 'copy-css', 'copy-js', 'deploy']));
});

gulp.task('default', gulp.series(['copy-php', 'copy-css', 'copy-js', 'deploy']));
