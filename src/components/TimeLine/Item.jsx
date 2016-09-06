import React, {Component} from 'react';
import styles from './Item.css';

import Point from './Point.jsx';
import Line from './Line.jsx';
import PopCard from './PopCard.jsx';

class Item extends Component{



	render(){



		return(
			<div className={styles.container}>
				<Point />
				<PopCard />
				

			</div>


			)
	}
}

module.exports = Item;