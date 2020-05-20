const gulp   = require('gulp');
const watch  = require('gulp-watch');
const ftp    = require('vinyl-ftp');
const fs     = require('file-system');
const prompt = require('prompt');

var login = require('./login.json');
var globs = [ 'dist/*' ];

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
    return gulp.src('src/*.php').pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  return gulp.watch('src/*', gulp.series(['copy-php', 'deploy']));
});

gulp.task('default', gulp.series(['copy-php', 'deploy']));
