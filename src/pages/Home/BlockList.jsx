import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
//import styles from './Banner.css';

import ItemBlock from './../../components/ItemBlock';

class BlockList extends Component{


	render(){

		//need to refactory, imgPath from Home component




		return(
				<Row>
					<Col xs={3} sm={3}>
						<Link to='/person'>
							<ItemBlock imgPath={{front:'images/person.jpg',
												back :'images/personbg.jpg'}}/>
						</Link>
					</Col>
					<Col xs={3} sm={3}>
						<ItemBlock imgPath={{front:'images/projects.jpg',
											back :'images/projectsbg.jpg'}}/>
					</Col>
					<Col xs={3} sm={3}>
						<ItemBlock imgPath={{front:'images/demo.jpg',
											back :'images/demobg.jpg'}}/>
					</Col>
					<Col xs={3} sm={3}>
						<ItemBlock imgPath={{front:'images/other.jpg',
											back :'images/otherbg.jpg'}}/>
					</Col>
				</Row>

			);
	}
}

module.exports = BlockList;