const gulp = require('gulp');

const concat = require('gulp-concat');
const rename = require('gulp-rename');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

const settings = {
    dist: 'css', 
    styles: [ 
        'src/normalize.scss',

        // // Skeleton:
        'src/skeleton/colors.scss',
        'src/skeleton/base-styles.scss',
        'src/skeleton/typography.scss',
        'src/skeleton/buttons.scss',
        'src/skeleton/forms.scss',
        'src/skeleton/tables.scss',
        'src/skeleton/spacing.scss',
        'src/skeleton/alerts.scss',
        'src/skeleton/element-colors.scss', //? keep as last element

        // // Flexbox-Grid:
        'src/flexbox-grid.scss',
    ],
}

// CSS/SASS: compile scss to css, autoprefix, minify
gulp.task('sass', function () {
    return gulp.src( settings.styles ) 
        .pipe(concat( 'skeleton-styled.scss' ))
        .pipe(gulp.dest( settings.dist ))

        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ 
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('skeleton-styled.css')) 
        .pipe(gulp.dest( settings.dist )) 
        .pipe(rename('skeleton-styled.min.css'))
        .pipe(minify({compatibility: 'ie8'})) 
        .pipe(gulp.dest( settings.dist ));
});

// WATCH FOR CHANGES
gulp.task('watch', function() {
    gulp.watch( settings.styles, ['sass']);
});

gulp.task('default', ['sass', 'watch']);

gulp.task('build',['sass']);