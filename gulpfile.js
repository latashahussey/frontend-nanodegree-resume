var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    responsive = require('gulp-responsive-images'),
    uglifyJS = require('gulp-uglifyjs'),
    paths = {
      jsSrc: 'src/js/',
      jsDest: 'dist/js/',
      imgSrc: 'src/images/',
      imgDest: 'dist/images/',
      cssSrc: 'src/css/',
      cssDest: 'dist/css/'
    },
    watch = require('gulp-watch');


/* GULP TASKS */

//Check gulpfile for errors
gulp.task('jshint', function() {
  return gulp.src('gulpfile.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

//Grab all css files then minify, merge, and move  them to destination
gulp.task('minifyCSS',function(){
    gulp.src(paths.cssSrc+'**/*.css')
    .pipe(minifyCSS())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(paths.cssDest));
});


//Grab all js files then ugly and move  them to destination
gulp.task('uglifyJS',function(){
    gulp.src(paths.jsSrc+'**/*.js')
    .pipe(uglifyJS())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(paths.jsDest));
});

//Resize and compress images, then move them to the destination
gulp.task('responsiveImages', function () {
  gulp.src(paths.imgSrc+'**/*')
    .pipe(responsive({
      '*.jpeg': [{
        width: 300,
        height: 200,
        suffix: '-small',
        quality: 60
      }],
      '*.jpg': [{
        width: 300,
        height: 200,
        suffix: '-small',
        quality: 60
      }]
    }))
    .pipe(gulp.dest(paths.imgDest));
});

//Watch for css or changes to images, then run tasks
gulp.task('watch', function () {
    // Endless stream mode
     gulp.watch(paths.cssSrc+'**/*.css', ['minifyCSS']);
     gulp.watch(paths.imgSrc+'**/*.*', ['responsiveImages']);
     gulp.watch(paths.jsSrc+'**/*.js', ['uglifyJS']);
});

//Run all gulp tasks
gulp.task('default',['jshint','minifyCSS','responsiveImages','uglifyJS','watch']);
