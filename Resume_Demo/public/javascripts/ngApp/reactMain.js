var Child = require('./main/nameTag.jsx');
var React = require('./../../libs/react/react.js');
window.React = React;
console.debug(React);


React.render(<Child />,document.getElementById('example'));