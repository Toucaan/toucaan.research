+~-(function(r) {

    'use strict';

    const gulp = r('gulp');
    const sass = r('gulp-sass');

    gulp.task('sass', function() {
        return gulp.src('./source/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/'));
    });

    gulp.task('sass:watch', function() {
        gulp.watch('./source/scss/*.scss', ['sass']);
    });

    gulp.task('default', ['sass']);

})(require);