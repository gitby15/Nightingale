var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var babelify = require("babelify");
var reactify = require('reactify');
var babel = require('gulp-babel');



var path_base = 'Resume_Demo/public';
var path_libs = path_base+'/libs';
var path_js = path_base+'/javascripts';
var path_ngApp = path_js+'/ngApp';
var path_output = path_base+'/bin';
var path_css = path_base+'/stylesheets';
var path_react = path_js+'/reactComponents';





gulp.task('reactify',function(){
	browserify(path_react+'/reactMain.js')
    .transform(babelify)
    .bundle()
    .pipe(source(path_output+'/bundle2.js'))
    .pipe(gulp.dest('.'));
});


gulp.task('ngMerge', function() {
 	gulp.src([
 		//angular libraries
 		path_libs+'/angular/angular.js',
 		path_libs+'/angular-ui-router/release/angular-ui-router.js',

 		//self ng files
 		path_ngApp+'/app.js',
 		path_ngApp+'/**/*.js'])
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
		])
	.pipe(concat(path_output+'/bundle.js'))
	.pipe(gulp.dest('.'));
});

gulp.task('watch',function(){
	gulp.watch(path_ngApp+'/**/*.js',['ngMerge']);
	gulp.watch(path_css+'/**/*.css',['styles']);
	gulp.watch(path_react+'/**',['reactify']);

});



gulp.task('default',function(){
	gulp.start('ngMerge','bundle','styles','reactify','watch');
});

