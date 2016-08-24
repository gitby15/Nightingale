import React,{Component} from 'react';

class NameWidget extends Component{
	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	static defaultProps = {
						firstName:"Jin",
						lastName:"Li"
					};

	_handleClick = (event) =>{
		

	}
	render(){
		let styles = {
			container:{
				display:'flex',
				alignItems:'center',
				height:'100%',
				boxOrient:'vertical'
			},
			name:{
				//margin:'auto 5%',
				
			}
		}
		return (

			<div style={styles.container}>
				{/*
					About event binding
					https://segmentfault.com/q/1010000003763076
				*/}
				<h1 style={styles.name} onClick={this._handleClick}>{this.props.lastName} {this.props.firstName}</h1>
				
			</div>)
	}
}


	

module.exports = NameWidget;