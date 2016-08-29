import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

import {Grid, Row, Col} from 'react-bootstrap';
//import styles from './Banner.css';
import Carousel from './../../components/Carousel';

class CarouselBody extends Component{


	render(){
		return(
			<Row>
				<Carousel />
			</Row>
			);
	}
}

module.exports = CarouselBody;