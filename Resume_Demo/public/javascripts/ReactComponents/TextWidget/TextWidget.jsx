import React,{Component} from 'react';

class TextWidget extends Component{
	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	static defaultProps = {
						text:'Tim Li'
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
			
		}
		return (

			<div style={styles.container}>
				{/*
					About event binding
					https://segmentfault.com/q/1010000003763076
				*/}
				<h1 onClick={this._handleClick}>{this.props.text}</h1>
				
			</div>)
	}
}


	

module.exports = TextWidget;