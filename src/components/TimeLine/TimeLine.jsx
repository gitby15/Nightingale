import React, {Component} from 'react';
import styles from './TimeLine.css';

import Point from './Point.jsx';
import Line from './Line.jsx';
import ItemHead from './ItemHead.jsx';
import ItemEnd from './ItemEnd.jsx';
import ItemA from './Item.jsx';

class TimeLine extends Component{

	static Item = class Temp extends Component{
		render(){
			return null;
		}

	};
	//I know velocity of points and lines
	static defaultProps = {
		

	}

	constructor(props){
		super(props);
		this.state = {
			itemDelays:{},
			cbacks:{},
		}
	}







	emmitDelay(idx,duration,cback){
		
		
		this.state.itemDelays[idx] = duration;
		this.state.cbacks[idx] = cback;
	}

	componentDidMount(){
		
		let timer = 100;
		const {cbacks, itemDelays} = this.state;

		for(let idx in cbacks){
			
			setTimeout(cbacks[idx],timer);
			timer += itemDelays[idx];
		}

	}

	render(){


		let children = this.props.children;
		let middleItems = [];
		if(children){
			middleItems = children.map((item,idx)=>{
				let index = idx - 1;
				if(idx == 0){
					index = 'head';
				}
				return(
					<ItemA key={item.key} idx={idx+1} emmitDelay={this.emmitDelay.bind(this)} delay={this.state.itemDelays[index]}>
						{item.props.children}
					</ItemA>
					)
		 });
		}



		return(
		



		<section>
			<div className={styles.container} >
				<ItemHead key={'item-first'} idx={0} emmitDelay={this.emmitDelay.bind(this)} showComponent={true}/>				
				{middleItems}		
				<ItemEnd key={'item-last'} idx={middleItems.length+1}  emmitDelay={this.emmitDelay.bind(this)}/>

			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;