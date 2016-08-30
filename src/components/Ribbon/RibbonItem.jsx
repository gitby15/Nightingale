import React, {Component} from 'react';
import styles from './RibbonItem.css';
import {Link} from 'react-router';


class RibbonItem extends Component{
	
	static defaultProps = {
		text:'Text'
	}

	render(){
		
		
		return(
			<Link to='#' className={styles.item}>
				<img src={this.props.img} className={styles.img}/>
				<div className={styles.descWrapper}>
					<div className={styles.text}>
						{this.props.text}
					</div>
				</div>
				
			</Link>
			)
	}
}

module.exports = RibbonItem;