//Gulp Setup
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
// import imagemin from 'gulp-imagemin';
// const imagemin = import ('gulp-imagemin');
const uglify = require('gulp-uglify'); //Used to minify Js files
// const autoprefixer = require('gulp-autoprefixer'); //Makes prefixes specific CCS such as CSS containing webkit and moz compatible for all browsers
const browserSync = require('browser-sync').create();  //Saves changes automatically without refreshing

const { src, series, parallel, dest, watch } = require('gulp');

function style() {
  return src('./assets/scss/**/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(rename({ suffix: '.min' })) // Rename the file to style.min.css
  // .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('./assets/build/css'))
  .pipe(browserSync.stream());
}

function scripts() {
  return src('./assets/js/**/*.js')
  .pipe(rename({ suffix: '.min' })) // Rename the file to custom.min.css
  .pipe(uglify())
  .pipe(gulp.dest('./assets/build/js'))
  .pipe(browserSync.stream());
}

// function images() {
//   return src('./assets/img/**/*.{jpg,png,gif,svg}')
//     .pipe(imagemin())
//     .pipe(gulp.dest('./assets/build/img'));
// }

function watchTask() {
  browserSync.init({
    proxy: "http://portfolio.ddev.site/"
  });
  watch(['./assets/scss/**/*.scss'], { interval: 1000 }, parallel(style));
  watch(['./assets/js/**/*.js'], { interval: 1000 }, parallel(scripts));
  // watch(['./assets/img/**/*.{jpg,png,svg,gif}'], { interval: 1000 }, parallel(scripts));

}

exports.style = style;
exports.scripts = scripts;
// exports.images = images;
exports.watchTask = watchTask;
exports.default = series(parallel(style, scripts), watchTask);