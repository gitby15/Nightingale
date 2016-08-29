//import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';
//require('expose?$!expose?jQuery!jquery');
//require("bootstrap-webpack");
require('./styles/style.css');


import Home from './pages/Home';
import Person from './pages/Person';

// Render the main component into the dom
class Tes extends React.Component{
	render(){
		
		return(<div>12313</div>);
	}
}

//ReactDOM.render(<Home />, document.getElementById('app'));


ReactDOM.render(<Router history={hashHistory}>
					<Router path='/' component={Home}></Router>
					<Router path='/person' component={Person}></Router>
				</Router>

	, document.getElementById('app'));