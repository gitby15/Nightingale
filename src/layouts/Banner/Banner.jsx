import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

import {Grid, Row, Col} from 'react-bootstrap';
import styles from './Banner.css';
/* Import React-Bootstrap Components*/

import Name from '../../components/Name';
import Ribbon from '../../components/Ribbon';






class Banner extends Component{

	static classArr(){
		let str = '';
		/**
			for of function in sougou broswer doesn't work, but it is
			fine in chrome, I think this is a issue with babel.

		
			for(let item of args){
				console.log(item);
				if('string' == typeof(item))
			  		{str += ' '+item;}
			}
		*/

		for(let idx=0; idx< arguments.length; idx++){
			if('string' == typeof(arguments[idx]))
		  		{str += ' '+arguments[idx];}
		}
		
		return str;
	}


	render(){
		
		return(
			<div className={this.props.className}>
				<div className={Banner.classArr(styles.container,styles.weight)}>
					<div className={styles.ribbonWrapper}>
						<Ribbon />
					</div>
					<div className={styles.infoWrapper}>
						<Name />
					</div>
						
				</div>
			</div>

			);
	}
}

module.exports = Radium(Banner);