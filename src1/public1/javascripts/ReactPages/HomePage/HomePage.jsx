import React, {Component} from 'react';
import Radium, {Style} from 'radium';

import Contact from '../../ReactComponents/ContactWidget';
import Slider from '../../ReactComponents/SliderWidget';
import ItemBlock from '../../ReactComponents/ItemBlockWidget';



import Banner from './Banner/Banner.jsx';

/* Import React-Bootstrap Components*/
import {Grid, Row, Col} from 'react-bootstrap';


class HomePage extends Component{

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
						
						<Slider />
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
						
					</Col>
					
				</Row>
			</Grid>
		
		);
	}

}

module.exports = Radium(HomePage);

