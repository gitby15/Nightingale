import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute ,hashHistory} from 'react-router';

require('../stylesheets/style.css');

class APP extends Component{

	render(){
		return (<div>
				Hello
				</div>);
		
	}
}


class BPP extends Component{

	render(){
		return (<div>
				Bello
				</div>);
		
	}
}




render((
	<Router history={hashHistory} >
		<Route path='/' component={APP}>

		</Route>
		<Route path='/bpp' component={BPP}>

		</Route>

	</Router>
	),document.getElementById('react-app'));