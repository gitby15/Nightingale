import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

import styles from './Banner.css';
/* Import React-Bootstrap Components*/
import {Grid, Row, Col} from 'react-bootstrap';

import Name from '../../components/Name';
import Ribbon from '../../components/Ribbon';





class Banner extends Component{

	render(){
		

		return(
			
			<Row>
				<article className={styles.container}>
					<div className={styles.ribbonWrapper}>
						<Ribbon />
					</div>
					<div className={styles.infoWrapper}>
						<Name />
					</div>
					
				</article>
			</Row>
			

			);
	}
}

module.exports = Radium(Banner);