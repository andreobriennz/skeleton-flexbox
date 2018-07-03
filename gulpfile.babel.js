const gulp = require('gulp');

const concat = require('gulp-concat');
const rename = require('gulp-rename');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

const settings = {
    dist: 'dist/kube', 
    styles: [ 
        'src/normalize.scss',

        // // Skeleton:
        'src/skeleton/base-styles.scss',
        'src/skeleton/typography.scss',
        'src/skeleton/buttons.scss',
        'src/skeleton/forms.scss',
        'src/skeleton/tables.scss',
        'src/skeleton/spacing.scss',

        // // Flexbox-Grid:
        'src/flexbox-grid.scss',

        // Kube 6.5.2 (optional - uncomment to use)
        'src/kube/src/_scss/_variables.scss', // required if using Kube
        'src/kube/src/_scss/mixins/_breakpoints.scss',
        'src/kube/src/_scss/components/_colors.scss', // create classes for colors
        'src/kube/src/_scss/components/_typography.scss', // alternative typography (requires breakpoints)
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