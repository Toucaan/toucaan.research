!+~-(function(r, p) {

    'use strict';

    const gulp = r('gulp');
    const sass = r('gulp-sass');

    gulp.task('sass', function() {
        return gulp.src('./source/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/toucaan.css'));
    });

    gulp.task('sass:watch', function() {
        gulp.watch('./source/scss/*.scss', ['sass']);
    });

    gulp.task('default', ['sass']);

})(require, process.argv);

// +~~-(function (r, process) {
//     'use strict';

//     var scss = r("gulp-scss");
//     var gulp = r("gulp");

//     gulp.task('scss', function () {
//         gulp.src(
//             './source/scss/*.scss'
//         ).pipe(scss(
//             {'bundleExec': true}
//         )).pipe(gulp.dest('./dist/'));
//     });

//     gulp.task('default', ['scss']);
// }(require, process.argv));


// +~~-((args) => {

//     console.log(args);

//     const gulp = require('gulp');
//     const stylus = require('gulp-stylus');


//     gulp.task('watch', () => {
//         gulp.watch('./source/*.styl');
//     });

//     gulp.task('build', () => {
//         gulp.src('./*.styl')
//             .pipe(gulp.dest('./dist'));
//     });

//     gulp.task('default', ['build']);
// })(process.argv);
