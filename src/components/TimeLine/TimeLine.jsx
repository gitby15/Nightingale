import React, {Component} from 'react';
import styles from './TimeLine.css';

import Item from './Item.jsx';

class TimeLine extends Component{



	render(){



		return(
		<section>
			<div className={styles.container}>
				<Item/>
				<Item/>
				<Item/>


			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;