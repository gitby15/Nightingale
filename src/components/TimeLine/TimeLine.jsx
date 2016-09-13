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
			//cbacks:{},
			ItemStatus:{}
		}
	}







	emmitDelay(idx,duration){
		
		
		this.state.itemDelays[idx] = duration;
		//this.state.cbacks[idx] = cback;
	}

	componentDidMount(){
		
		let timer = 200;
		const {cbacks, itemDelays,ItemStatus} = this.state;
	//	console.log(ItemStatus);
		// for(let idx in cbacks){
			
		// 	setTimeout(cbacks[idx],timer);
		// 	timer += itemDelays[idx];
		// }

		for(let idx in itemDelays){
			setTimeout(()=>{
				ItemStatus[idx] = true;
				this.setState({
					ItemStatus:ItemStatus
				});
				console.log(ItemStatus);
			},timer);
			timer += itemDelays[idx];
		}
		//console.log(ItemStatus);

	}

	render(){


		let children = this.props.children;
		let ItemStatus = this.state.ItemStatus;
		let middleItems = [];
		if(children){
			middleItems = children.map((item,idx)=>{
				let index = idx - 1;
				if(idx == 0){
					index = 'head';
				}
				return(
					<ItemA key={item.key} idx={idx+1} emmitDelay={this.emmitDelay.bind(this)}
					 delay={this.state.itemDelays[index]} showComponent={ItemStatus[idx+1]}>
						{item.props.children}
					</ItemA>
					)
		 });
		}

		let itemEndIdx = middleItems.length + 1;
		//console.log(ItemStatus[itemEndIdx]);
		return(
		



		<section>
			<div className={styles.container} >
				<ItemHead key={'item-head'} idx={0} emmitDelay={this.emmitDelay.bind(this)} showComponent={ItemStatus[0]} />				
				{middleItems}		
				<ItemEnd key={'item-end'} idx={itemEndIdx}
				  emmitDelay={this.emmitDelay.bind(this)} showComponent={ItemStatus[itemEndIdx]}/>

			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;