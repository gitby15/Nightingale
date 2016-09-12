import React, {Component} from 'react';
import styles from './TimeLine.css';

import Point from './Point.jsx';
import Line from './Line.jsx';

class TimeLine extends Component{
	static Item = Line;
	//I know velocity of points and lines
	static defaultProps = {
		arr:[1,2,3,4,5]
	}


	showNext(){

	}

	componentDidMount(){

	}

	render(){


		let children = this.props.children;

		let middleItems = [];
		 

		if(children){
			children.map((item,idx)=>{
				console.log(item);
				item.props.showDom('bbb');
				//item.showDom(222);
				//item.props.last = true;
			//	item.props.a = 'a';

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
				{this.props.children}		
				<Line key={'item-last'} last={true}/>

			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;