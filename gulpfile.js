var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('ngMerge', function() {
 	gulp.src(['Resume_Demo/public/javascripts/ngApp/*',
 		'Resume_Demo/public/libs/angular/angular.min.js',
 		'Resume_Demo/public/libs/angular-ui-router/release/angular-ui-router.min.js'])
 	.pipe(concat('Resume_Demo/public/javascripts/bin/ngApp.js'))
 	.pipe(gulp.dest('.'))
});