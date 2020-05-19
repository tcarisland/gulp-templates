const gulp   = require('gulp');
const ftp   = require('vinyl-ftp');
const fs     = require('file-system');
const prompt = require('prompt');

var login = require('./login.json');

gulp.task('deploy', function() {
    var globs = [ 'dist/*' ];
    const conn = ftp({
	host: login.host,
	user: login.user,
	password: login.pass,
	port: login.port,
	parallel: 10,
	reload: true

    });
    return gulp.src(globs, { base: './dist', buffer: false } ).pipe(conn.dest('/www/test/'));
});

gulp.task('copy-php', function() {
    return gulp.src('src/*.php').pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series(['copy-php', 'deploy']));
