var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;


//var Slider = require('./SliderWidget/Slider.jsx');
import Slider from './SliderWidget';

var Name = require('./nameWidget');
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


app.directive('sliderwidget',function(){
	return{
		restrict:'E',
		scope:false,
		replace:true,
		link:function(scope,el,attrs){
						
			
		ReactDOM.render(<Slider />,el[0]);
		}
	}
});

//ReactDOM.render(<Child />,document.getElementById('example'));