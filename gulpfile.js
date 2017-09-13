const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const scripts = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const livereload = require('gulp-livereload');
// var pump = require('pump');

gulp.task('imagemin', () =>
	gulp.src('src/img/*')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest('dist/images'))
);

gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
  	.pipe(uglify())
    .pipe(scripts('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('default', ['imagemin', 'sass', 'scripts', 'watch']);

gulp.task('watch', function(){
	livereload.listen(1443);
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/img/*', ['imagemin']);
	gulp.watch('src/sass/*.scss', ['sass']);
});



