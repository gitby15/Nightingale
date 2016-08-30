import React, {Component} from 'react';
import Radium from 'radium';


class CarouselArrow extends Component{
	constructor(props){
		super(props);
	}

	handleArrowClick(option){
		this.props.turn(option);
		//console.log(option);
	}


	render(){
		let styles = {
			wrapper:{
				position:'absloute',
				//bottom:'50%',
				//transform:'translateY(-50%)',
				display:'flex',
				justifyContent:'space-between',
				alignItems:'center',
				width:'100%'
			},
			arrowBase:{
				display:'inline-block'

			},
			arrowLeft:{

			}
		}

		let iconCssClassName = {
			left:'glyphicon glyphicon-chevron-left',
			right:'glyphicon glyphicon-chevron-right'
		}

		return(
			<div
				style={styles.wrapper}>
				<span
					style={[styles.arrowBase]}
					onClick={this.handleArrowClick.bind(this,-1)}
					className={iconCssClassName.left}>
					
				</span>
				<span
					style={[styles.arrowBase]}
				    onClick={this.handleArrowClick.bind(this,1)}
				    className={iconCssClassName.right}>
				    
				</span>
			</div>
			)
		}
}


module.exports = Radium(CarouselArrow);