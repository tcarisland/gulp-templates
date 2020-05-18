const gulp   = require('gulp');
const sftp   = require('gulp-sftp');
const fs     = require('file-system');
const prompt = require('prompt');

var login = require('./login.json');

gulp.task('deploy', function() {
  var globs = [ 'dist/*' ];
  return gulp.src(globs, login).pipe(sftp({
    host: login.host,
    user: login.user,
    port: login.port,
    remotePath: login.remotePath,
    privateKey: fs.readFileSync(login.privateKey),
    timeout: login.timeout
  }));
});

gulp.task('copy-php', function() {
    return gulp.src('src/*.php').pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series(['copy-php', 'deploy']));
