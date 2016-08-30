import {conbineReducers} from 'redux';
import todo from './todos.js';
import visibilityFilter from './visibilityFilter.js';

const todoAPP = combineReducers({
	todos,
	visibilityFilter

});

module.exports = todoAPP;