import React, {Component} from 'react';
import Radium from 'Radium';


class SliderArrow extends React.Component{
	constructor(props){
		super(props);
	}

	handleArrowClick(option){
		this.props.turn(option);
	}


	render(){
		let styles = {
			wrapper:{
				position:'relative'
			},
			arrowBase:{
				border:'solid 2px black'
			}
		}

		return(
			<div>
				<span
					onClick={this._handleArrowClick.bind(this,-1)}>
					left
				</span>
				<span
				    onClick={this.handleArrowClick.bind(this,1)}>
				    right
				</span>
			</div>
			)
		}
}


module.exports = Radium(SliderArrow);