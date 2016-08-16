var React = require('react');

var ReactDOM = require('react-dom');
var Child = React.createClass({
  render: function(){
    return (
      <div> The Child </div>
    )
  }
});

module.exports = Child;