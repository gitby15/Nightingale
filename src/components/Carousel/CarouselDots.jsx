import React, {Component} from 'react';
import Radium from 'radium';


class CarouselDot extends Component{
	constructor(props){
		super(props);
	}


	handleDotClick(i){
		
		let option = i - this.props.currentLocal;
		this.props.turn(option);
	}

	render(){
		let dotNodes = [];
		let {count,currentLocal} = this.props;
		let wrapperWidth = 25*count;
		let styles = {
			wrapper:{
				width:+wrapperWidth+'px',
				position:'absolute',
				top:'50%',
				left:'50%',
				transform:'translate(-50%,-50%)',
				display:'flex',
				alignItems:'center',
				justifyContent:'space-between'

			},
			dotsWarrers:{
				width:100/count +'%',
				height:'13px',
				display:'flex',
				justifyContent:'center',
				alignItems:'center'

			},
			dotsBase:{
				display:'inline-block',
				backgroundColor:'#fff',
				padding:'4px',
				borderRadius:'50%',
				opacity:'1',
				':hover':{
					border:'solid 2px #fff',
					backgroundColor:'#50ccfb'
					
				}
			},
			dotsCrnt:{
				transition:'1s',
				transform:'rotate(360deg)',
				borderRadius:'0'
			}

		}



		for(let i = 0; i<count; i++){

			let isCurrent = currentLocal == i;
			dotNodes[i] = (
				<div
					style={styles.dotsWarrers}
					key={'dotsWarrers-'+i}
				>
					<span
						style={[styles.dotsBase,isCurrent?styles.dotsCrnt:null]}
						key={'dot'+i}
						onClick={this.handleDotClick.bind(this,i)}
						ref={'dot-'+i}
						
						>
					</span>
				</div>
				
				);
		}

		return (
			<div style={styles.wrapper}>
				{dotNodes}
			</div>)
	}
}

module.exports = Radium(CarouselDot);