var gulp = require('gulp');
var concat = require('gulp-concat');
var deporder = require('gulp-deporder');
var uglify = require('gulp-uglify');
var del = require('del');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var htmlclean = require('gulp-htmlclean');
var browserSync = require('browser-sync').create();
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var cache = require('gulp-cache');// Optimizing images however, is an extremely slow process , So gulp-cache will cache the output.

// Since we're generating files automatically, we'll want to make sure that files that are no longer used don't remain anywhere without us knowing.This process is called cleaning.
gulp.task('clean:app', function() {
  return del.sync('app');
})
//This task will watch over all the js files in public folder.
gulp.task('pack-js', function () {
  var jsbuild = gulp.src(['public/**/*.js'])
    .pipe(minify())
    .pipe(deporder())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(browserSync.reload({
      stream: true
    }))
  return jsbuild.pipe(gulp.dest('app/js'));
});

//This task will watch over all the js files in public folder.
gulp.task('pack-css', function () {
  return gulp.src('public/**/*.css')
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(concat('mainFile.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//This task will watch over all the scss files in public folder.
gulp.task('pack-sass', function () {
  return gulp.src('public/**/*.scss')
    .pipe(sass())
    .pipe(cleanCss({ debug: true }, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//This task will watch over all the html files in public folder.
gulp.task('pack-html', function () {
  return gulp.src('public/**/*.html')
    .pipe(newer('app/html'))
    .pipe(htmlclean())
    .pipe(gulp.dest('app/html'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//This task will watch over all the jpg files in public folder.
gulp.task('pack-image', function () {
  var out = 'app/images'
  return gulp.src('public/assets/images/**/*.+(png|jpg|gif|svg)')
    .pipe(newer(out))
    .pipe(cache(imagemin({
      optimizationLevel: 5,
      interlaced: true // Setting interlaced to true.  In interlaced GIF files the image data is stored in a format that allows Netscape (and other viewers that support interlaced GIFs) to begin to build a low-resolution version of the full-sized GIF picture on the screen while the file is still downloading.
    })))
    .pipe(gulp.dest(out))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//This task will watch over all the server file.
gulp.task('pack-serverjs', function () {
  return gulp.src('server.js')
    .pipe(minify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//Browser Sync helps make web development easier by spinning up a web server that helps us do live-reloading easily.
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    },
  })
})
gulp.task('watch', gulp.parallel('browserSync', function () {
  console.log("Building Files...")
  console.log("Watching your Files...")
  gulp.watch('public/**/*.scss', gulp.series('pack-sass'));
  gulp.watch('public/**/*.js', gulp.series('pack-js'));
  gulp.watch('public/**/*.css', gulp.series('pack-css'));
  gulp.watch('public/**/*.html', gulp.series('pack-html'));
  gulp.watch('public/**/*.jpg', gulp.series('pack-image'));
  gulp.watch('server.js', gulp.series('pack-serverjs'));
}));
gulp.task('default', gulp.series('watch'));

