var Child = require('./nameWidget.jsx');
var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;
console.debug(React);


ReactDOM.render(<Child />,document.getElementById('example'));