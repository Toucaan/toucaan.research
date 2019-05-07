((r) => {

    'use strict'

    const gulp = r('gulp')
    const sass = r('gulp-sass')
    const path = r('path')

    gulp.task('precompile', () => gulp.src(path.join('.', 'source', '*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.join('.', 'dist'))))

    gulp.task('default', () => {
        gulp.watch([path.join('.', 'source', 'scss', '*.scss'), path.join('.', 'source', 'toucaan.scss')], ['precompile'])
    })

})(require)