import React, {Component} from 'react';

class BaseContainer extends Component{
	


	render(){
		console.log(this.props.children	);

		return(
			<div data-name={"1231231"}>
				{this.props.children}
			</div>
			)
	}
	
}

module.exports = BaseContainer;