//import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';


//require('expose?$!expose?jQuery!jquery');
//require("bootstrap-webpack");
require('./styles/style.css');


import Home from './pages/Home';

// Render the main component into the dom
class Tes extends React.Component{
	render(){
		console.log('----');
		return(<div>12313</div>);
	}
}

ReactDOM.render(<Home />, document.getElementById('app'));
