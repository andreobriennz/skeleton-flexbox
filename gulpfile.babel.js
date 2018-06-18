const gulp = require('gulp');

const concat = require('gulp-concat');
const rename = require('gulp-rename');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

const settings = {
    dist: 'dist', 
    styles: [ 
        'src/normalize.scss',
        'src/skeleton.scss',
        'src/flexbox-grid.scss',
    ],
}

// CSS/SASS: compile scss to css, autoprefix, minify
gulp.task('sass', function () {
    return gulp.src( settings.styles ) 
        .pipe(concat( 'skeleton-flexbox.scss' ))
        .pipe(gulp.dest( settings.dist ))

        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ 
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('skeleton-flexbox.css')) 
        .pipe(gulp.dest( settings.dist )) 
        .pipe(rename('skeleton-flexbox.min.css'))
        .pipe(minify({compatibility: 'ie8'})) 
        .pipe(gulp.dest( settings.dist ));
});

// WATCH FOR CHANGES
gulp.task('watch', function() {
    gulp.watch( settings.styles, ['sass']);
});

gulp.task('default', ['sass', 'watch']);