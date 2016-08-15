var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('ngMerge', function() {
 	gulp.src(['Resume_Demo/public/javascripts/ngApp/*'])
 	.pipe(concat('Resume_Demo/public/javascripts/bin/ngApp.js'))
 	.pipe(gulp.dest('.'))
});