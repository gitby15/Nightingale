class ContactWidget extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			
		};
	}
	static defaultProps = {
		phoneNumber:13127582620

	}
	_handleClick = (event) =>{
		
		}

	render(){
		let styles = {
			container:{
				display:'flex',
				flexDirection:'row',
				alignItems:'flex-end', 
				position:'absolute',
				top:'2px',
				bottom:'2px',
				left:'10px',
				right:'10px',
				justifyContent:'flex-end'
				
				
			},
			contact:{
				fontSize:'15px'
			}
		}


		return(
			<div style={styles.container}>
				{/*
					About event binding
					https://segmentfault.com/q/1010000003763076
				*/}
				<div style={styles.contact} onClick={this._handleClick}>{this.props.phoneNumber}</div>
				
			</div>)
		
	}
}


module.exports = ContactWidget;