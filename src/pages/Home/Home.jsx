import React, {Component} from 'react';
import Radium, {Style} from 'radium';

import Contact from './../../components/Contact';
import Carousel from './../../components/Carousel';
import ItemBlock from './../../components/ItemBlock';

 

import Banner from './Banner.jsx';

/* Import React-Bootstrap Components*/
import {Grid, Row, Col} from 'react-bootstrap';


class Home extends Component{

	render(){


		return (
			<Grid>
				{/*
					<Row >
						<Col xs={12} sm={7} data-component="name-widget">
							<Name/>
						</Col>
						<Col xs={12} sm={5} data-component="contact-widget">
							<Contact />
						</Col>
					</Row>

				*/}

					<Banner />
				
				<Row >
					<Col xs={12} sm={12}>
						
						<Carousel />
					</Col>
					
				</Row>
				<Row>
					<Col xs={3} sm={3}>
						<ItemBlock imgPath={{front:'images/person.jpg',
											back :'images/personbg.jpg'}}/>
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
				<Row>
					<Col xs={12} sm={12}>
						123123
					</Col>
					
				</Row>
			</Grid>
		
		);
	}

}

module.exports = Radium(Home);

