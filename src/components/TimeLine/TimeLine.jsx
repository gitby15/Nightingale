import React, {Component} from 'react';
import styles from './TimeLine.css';

import Point from './Point.jsx';
import Line from './Line.jsx';

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
			a:5
		}
		this.delayArr = [];
	}


	showNext(idx,duration){
		// console.log(this.a);
		//this.a = duration;
		this.props.delayArr.push(duration);
		
		//console.log(this.props.delayArr);
	}

	componentDidMount(){
		console.log(this.props.delayArr);
	

	}

	render(){


		let children = this.props.children;

		let middleItems = [];
		 console.log('a:' + this.state.a);

		if(children){
			middleItems = children.map((item,idx)=>{
		//		console.log('map.temp : '+this.temp);
				console.log('a2:');
				console.log(this.a);
				return(
					<Line key={item.key} idx={idx} showNext={this.showNext.bind(this)} delay={this.itemDelay}>
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

		*/}
				
				<Line key={'item-first'} first={true}/>				
				{middleItems}		
				<Line key={'item-last'} last={true}/>

			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;