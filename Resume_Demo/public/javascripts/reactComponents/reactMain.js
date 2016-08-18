var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;

var Name = require('./nameWidget/nameWidget.jsx');
var Contact = require('./contactwidget/contactwidget.jsx');

app.directive('namewidget',function(){
	return{
		restrict:'E',
		scope:false,
		replace:true,
		link:function(scope,el,attrs){
			
		// var _data = {
		// 	lastName:scope.userInfo.lastName,
		// 	firstName:scope.userInfo.firstName
		// 	};
		// var lastName = "Li";
		// var firstName = "Jin";
			
			
		ReactDOM.render(<Name/>,el[0]);
		}
	}
});

app.directive('contactwidget',function(){
	return{
		restrict:'E',
		scope:false,
		replace:true,
		link:function(scope,el,attrs){
						
			
		ReactDOM.render(<Contact/>,el[0]);
		}
	}
});

//ReactDOM.render(<Child />,document.getElementById('example'));