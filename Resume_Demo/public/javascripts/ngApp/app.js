window.app = angular.module('demo',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/404");

	$stateProvider.state('main',{
		url:"",
		templateUrl:"javascripts/ngApp/main/main.tpl",
		controller:'mainCtrl'		
	})
	.state('person',{
		url:"person",
		templateUrl:"javascripts/ngApp/person/person.tpl",
		controller:'personCtrl'		
	})
});

