import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute ,hashHistory} from 'react-router';




import HomePage from './ReactPages/HomePage';

require('../stylesheets/style.css');

//
render(
	
	<Router history={hashHistory}>
		<Route path='/' component={HomePage}>
		</Route>
	</Router>

	,document.getElementById('react-app'));