import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute ,hashHistory} from 'react-router';




import HomePage from './ReactPages/HomePage/HomePage.jsx';

require('../stylesheets/style.css');

//
render((<HomePage/>
	),document.getElementById('react-app'));