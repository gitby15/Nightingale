var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;

var Name = require('./nameWidget.jsx');

app.directive('namewidget',function(){
	return{
		restrict:'E',
		scope:false,
		replace:true,
		link:function(scope,el,attrs){
			console.log(Name);
			ReactDOM.render(<Name />,el[0]);
		}
	}
});

//ReactDOM.render(<Child />,document.getElementById('example'));