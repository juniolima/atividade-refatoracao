var gulp = require("gulp");
var sass = require("gulp-sass");
//pasta de destino css
var cssDest = './dist/css/';



gulp.task('compile-sass', function(){
	return gulp.src('./source/scss/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
	gulp.watch('./source/scss/*.scss', ['compile-sass']);
});


gulp.task('default', ['compile-sass', 'watch']);
