const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('run-ios', shell.task('react-native run-ios --simulator="iPad Air"'));

gulp.task('default', () => {
    console.log('hello');
});
