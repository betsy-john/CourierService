let gulp = require('gulp');
let concat = require('gulp-concat');
let deporder = require('gulp-deporder');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let del = require('del');
let minify = require('gulp-minify');
let sass = require('gulp-sass');
let cleanCss = require('gulp-clean-css');
let imagemin = require('gulp-imagemin');
let newer = require('gulp-newer');
let htmlclean = require('gulp-htmlclean');
let browserSync = require('browser-sync').create();
let cssnano = require('gulp-cssnano');
let gulpIf = require('gulp-if');
let cache = require('gulp-cache');// Optimizing images however, is an extremely slow process , So gulp-cache will cache the output.
var gls = require('gulp-live-server');

// Since we're generating files automatically, we'll want to make sure that files that are no longer used don't remain anywhere without us knowing.This process is called cleaning.
gulp.task('clean:app', function() {
  return del.sync('app');
})
//This task will watch over all the js files in public folder.
gulp.task('pack-js', function () {
  let jsbuild = gulp.src(['public/**/*.js'])
    .pipe(minify())
    .pipe(deporder())
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
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
  let out = 'app/images'
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

//This task will watch over all the server files.
gulp.task('pack-server-files', function () {
  let jsbuild = gulp.src(['serverFiles/**/*.js'])
    .pipe(minify())
    .pipe(deporder())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main-server-source.js'))
    .pipe(browserSync.reload({
      stream: true
    }))
  return jsbuild.pipe(gulp.dest('app/server-files'));
});
//Browser Sync helps make web development easier by spinning up a web server that helps us do live-reloading easily.
// gulp.task('browserSync', function() {
//    browserSync.init({
//     server: {
//       baseDir: ['public','serverFiles' ]
//     }
//   })
// })
gulp.task('serve', function () {
  //1. run your script as a server
  var server = gls.new('server.js');
  server.start();
  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['public/**/*.css', 'public/**/*.html', 'public/**/*.js'], function (file) {
    server.notify.apply(server, [file]);
  });
  gulp.watch('server.js', server.start.bind(server)); //restart my server
});

gulp.task('watch', gulp.parallel('serve', function () {
  console.log("Building Files...")
  console.log("Watching your Files...")
  console.log("Connected to server.")
  gulp.watch('public/**/*.scss', gulp.series('pack-sass'));
  gulp.watch('public/**/*.js', gulp.series('pack-js'));
  gulp.watch('public/**/*.css', gulp.series('pack-css'));
  gulp.watch('public/**/*.html', gulp.series('pack-html'));
  gulp.watch('public/**/*.jpg', gulp.series('pack-image'));
  gulp.watch('serverFiles/**/*.js', gulp.series('pack-server-files'));
}));
gulp.task('default', gulp.series('watch'));

