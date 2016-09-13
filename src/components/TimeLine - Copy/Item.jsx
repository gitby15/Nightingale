import React, {Component} from 'react';
import styles from './Item.css';

import Point from './Point.jsx';
import Line from './Line.jsx';
import PopCard from './PopCard.jsx';

class Item extends Component{



	render(){



		return(
			<div className={styles.container}>
				<Point >
					<div>123123213123</div>
				</Point>
				
				

			</div>


			)
	}
}

module.exports = Item;