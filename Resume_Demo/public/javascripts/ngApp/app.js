window.app = angular.module('demo',['ui.router'])
console.log('123');

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/404");

	$stateProvider.state('main',{
		url:"",
		templateUrl:"javascripts/ngApp/main/main.tpl",
		controller:'mainCtrl'		
	})
});

