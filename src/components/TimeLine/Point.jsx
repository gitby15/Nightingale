import React, {Component} from 'react';
import styles from './Point.css';

class Point extends Component{



	render(){

		console.log('--- TimeLine Point has render ---');

		return(
			<div className={styles.container}>

				<div className={styles.boardWrapper}>
					<div className={styles.boardLeft} data-name='boardLeft'>
						
					</div>
					<div className={styles.boardRight} data-name='boardRight'>
					</div>
				</div>

			</div>


			)
	}
}

module.exports = Point;