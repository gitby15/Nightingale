import React, {Component} from 'react';
import styles from './TimeLine.css';

import Point from './Point.jsx';
import Line from './Line.jsx';

class TimeLine extends Component{



	render(){



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
				
				<Line/>

			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;