import React, {Component} from 'react';
import styles from './RibbonItem.css';
import {Link} from 'react-router';
import img from './img/ribbonb.png';
//let img = require('./img/ribbonb.png');

class RibbonItem extends Component{
	
	static defaultProps = {
		text:'download'
	}

	render(){
		console.log(img);
		let InlineStyle = {
			item:{
				backgroundImage:img,
				border:'solid 2px black'
			}
		}
		return(
			<Link to='#' className={styles.item} style={InlineStyle.item}>
				
				{this.props.text}
				
			</Link>
			)
	}
}

module.exports = RibbonItem;