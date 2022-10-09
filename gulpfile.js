var gulp = require("gulp");
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
const minify = require('gulp-minify');



gulp.task('jshint', function () {
    return gulp.src("src/js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
});

gulp.task("sass", function () {
    return gulp.src("src/sass/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on("error", sass.logError))
        .pipe(prefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))

});

gulp.task("watch", function () {
    gulp.watch("./src/sass/**/*.scss", gulp.series("sass"));
    gulp.watch("./src/js/**/*.js", gulp.series("jshint"));
});


gulp.task('compress', function() {
    gulp.src("src/js/*.js")
      .pipe(minify({
          ext:{
              src:'-debug.js',
              min:'.js'
          },
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('dist'))
  });

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});