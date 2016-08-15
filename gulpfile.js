var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('ngMerge', function() {
 	gulp.src([

 		//angular libraries
 		'Resume_Demo/public/libs/angular/angular.js',
 		'Resume_Demo/public/libs/angular-ui-router/release/angular-ui-router.js',


 		//self ng files
 		'Resume_Demo/public/javascripts/ngApp/*'])
 	.pipe(concat('Resume_Demo/public/javascripts/bin/ngApp.js'))
 	.pipe(gulp.dest('.'))
});