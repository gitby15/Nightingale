

class NameWidget extends React.Component{
	render(){
		let styles = {
			height:'50%',
			border:'2px solid black'
		}
		return (<h1 style={styles}> The Child </h1>)
	}
}

module.exports = NameWidget;