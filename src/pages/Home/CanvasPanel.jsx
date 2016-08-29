import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

import {Grid, Row, Col} from 'react-bootstrap';
//import styles from './Banner.css';


class CanvasPanel extends Component{


	render(){
		return(
			<Row>
					<Col xs={12} sm={12}>
						CanvasPanel
					</Col>
					
				</Row>
			);
	}
}

module.exports = CanvasPanel;