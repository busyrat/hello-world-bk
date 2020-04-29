const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')

const js_path = './src/*.js'

gulp.task('js', function () {
  return gulp
    .src([js_path])
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build'))
})

gulp.task('watch', () => {
  gulp.watch(js_path, gulp.series('js'))
})

gulp.task('default', gulp.series('js', 'watch'))
