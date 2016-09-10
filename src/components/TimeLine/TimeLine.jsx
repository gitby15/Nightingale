import React, {Component} from 'react';
import styles from './TimeLine.css';

import Point from './Point.jsx';
import Line from './Line.jsx';

class TimeLine extends Component{

	//I know velocity of points and lines
	static defaultProps = {
		arr:[1,2,3,4,5]
	}


	render(){


		// let children = this.props.children;
		// children.map(()=>{


		// });

		this.props.arr.map((item,idx)=>{

			console.log(item);
		});


		return(
		



		<section>
			<div className={styles.container}>
		{/*
<Point first={true}/>
				<Point>
					<p>joaisjdsalkjddsajdljsaldjasljdlkasjdljasdjs</p>
					<p>joaisjdsalkjddsajdljsaldjasljdlkasjdljasdjs</p>
					<p>joaisjdsalkjddsajdljsaldjasljdlkasjdljasdjs</p>
					
				</Point>
				<Point last={true}/>

		*/}
				
				<Line first={true}/>				
				<Line>
					<div>123123123</div>
					<div>123123123</div>
					<div>123123123</div>
					<div>123123123</div>
				</Line>				
				<Line last={true}/>

			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;