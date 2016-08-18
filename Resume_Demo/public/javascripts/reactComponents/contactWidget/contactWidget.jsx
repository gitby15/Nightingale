var Name = require("./../nameWidget/nameWidget.jsx");

class ContactWidget extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	_handleClick = (event) =>{
		
		}

	render(){
		let styles = {
			container:{
				display:'flex',
				alignItems:'center',
				position:'absolute',
				top:'0px',
				bottom:'0px',
				boxOrient:'vertical',
				boxPack:'end'
				
			},
			contact:{

			}
		}


		return(
			<div style={styles.container}>
				{/*
					About event binding
					https://segmentfault.com/q/1010000003763076
				*/}
				<div style={styles.contact} onClick={this._handleClick}>12323423456</div>
				
			</div>)
		
	}
}


module.exports = ContactWidget;