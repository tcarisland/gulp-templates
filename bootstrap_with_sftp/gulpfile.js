const gulp = require('gulp');
const sftp = require('gulp-sftp');
const fs = require('file-system');
const prompt = require('prompt');

var login = require('./login.json');

gulp.task('deploy', function() {
    prompt.start();
    var schema = {
	properties: {
	    passphrase: {
		hidden: true
	    }
	}
    };
    prompt.get(schema, function(err, result) {	
	var globs = [ 'dist/*', 'dist/**'];
	return gulp.src(globs, login)
	    .pipe(sftp({
		host: login.host,
		user: login.user,
		port: login.port,
		remotePath: login.remotePath,
		privateKey: fs.readFileSync(login.privateKey),
		passphrase: result.passphrase,
		timeout: login.timeout
	    }));
    });

});

gulp.task('default', ['message', 'copyHtml', 'copyBootstrap']);

gulp.task('message', function() {
    return console.log('Gulp is running');
});

gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('copyBootstrap', function() {
    gulp.src('src/bootstrap/**/*')
	.pipe(gulp.dest('dist/bootstrap'));
});
