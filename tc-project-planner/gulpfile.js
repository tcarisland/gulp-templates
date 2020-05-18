const gulp   = require('gulp');
const sftp   = require('gulp-sftp');
const fs     = require('file-system');
const prompt = require('prompt');

gulp.task('copy-php', function() {
    return gulp.src('src/*.php').pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series(['copy-php']));
