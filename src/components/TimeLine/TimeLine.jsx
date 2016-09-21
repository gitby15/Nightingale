import React, {Component} from 'react';
import styles from './TimeLine.css';
import Line from './Item.jsx';
import ItemHead from './ItemHead.jsx';
import ItemEnd from './ItemEnd.jsx';



class TimeLine extends Component{

	static Item = class Temp extends Component{
		render(){
			return null;
		}

	};
	//I know velocity of points and lines
	static defaultProps = {
		// arr:[1,2,3,4,5]
		delayArr:[]

	}

	constructor(props){
		super(props);
		this.state = {
			itemDelays:{}
		}
	}


	showNext(idx,duration){
		// console.log(this.a);
		//this.a = duration;
		
		this.state.itemDelays[idx] = duration;
		console.log(this.state.itemDelays);
		//console.log(this.props.delayArr);
	}

	componentDidMount(){
		
	

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
					<Line key={item.key} idx={idx} >
						{item.props.children}
					</Line>
					)

		 });
		}



		return(
		



		<section>
			<div className={styles.container} >
		{/*
<Point first={true}/>
				<Point>
					<p>joaisjdsalkjddsajdljsaldjasljdlkasjdljasdjs</p>
					<p>joaisjdsalkjddsajdljsaldjasljdlkasjdljasdjs</p>
					<p>joaisjdsalkjddsajdljsaldjasljdlkasjdljasdjs</p>
					
				</Point>
				<Point last={true}/>
				delay={this.state.itemDelays[]}

		*/}
				
				<ItemHead key={'item-first'} first={true} showNext={this.showNext.bind(this)} delay={0}/>				
				{middleItems}		
				<ItemEnd key={'item-last'} last={true} />

			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;