var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var reactify = require('gulp-reactify');
var browserify = require('browserify');



var path_base = 'Resume_Demo/public';
var path_libs = path_base+'/libs';
var path_js = path_base+'/javascripts';
var path_ngApp = path_js+'/ngApp';
var path_output = path_base+'/bin';
var path_css = path_base+'/stylesheets';

gulp.task('reactify',function(){
	gulp.src()
});


gulp.task('ngMerge', function() {
 	gulp.src([
 		//angular libraries
 		path_libs+'/angular/angular.js',
 		path_libs+'/angular-ui-router/release/angular-ui-router.js',

 		//self ng files
 		path_ngApp+'/app.js',
 		path_ngApp+'/**/*.js'])
 	.pipe(babel())
 	.pipe(concat(path_output+'/ngApp.js'))
 	.pipe(gulp.dest('.'));
});

gulp.task('styles',function(){
	gulp.src([
		path_libs+'/bootstrap/dist/css/bootstrap.css',
		path_css+'/style.css'
		])
	.pipe(concat(path_output+'/stylesheets.css'))
	.pipe(gulp.dest('.'));
})

gulp.task('bundle',function(){
	gulp.src([
		path_libs+'/jquery/dist/jquery.js',
		path_libs+'/bootstrap/dist/js/bootstrap.js',
		path_libs+'/react/react.js',
		path_libs+'/react/react-dom.js'
		])
	.pipe(concat(path_output+'/bundle.js'))
	.pipe(gulp.dest('.'));
});

gulp.task('watch',function(){
	gulp.watch(path_ngApp+'/**/*.js',['ngMerge']);
	gulp.watch(path_css+'/**/*.css',['styles']);

});



gulp.task('default',function(){
	gulp.start('ngMerge','bundle','styles','watch');
});

