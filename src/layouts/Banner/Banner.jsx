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
		for(let item of arguments){
			if('string' == typeof(item))
		  		{str += ' '+item;}
		}
		return str;
	}


	render(){
		
		return(
			
			<Row>
				<div className={Banner.classArr(styles.container,styles.weight)}>
					<div className={styles.ribbonWrapper}>
						<Ribbon />
					</div>
					<div className={styles.infoWrapper}>
						<Name />
					</div>
						
				</div>
			
			</Row>

			);
	}
}

module.exports = Radium(Banner);