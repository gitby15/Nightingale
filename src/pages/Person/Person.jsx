import React, {Component} from 'react';
import Radium, {Style} from 'radium';


import Banner from '../Home/Banner.jsx';

import {Grid, Row, Col} from 'react-bootstrap';

class Person extends Component{



	render(){
		return(
			<Grid>
				<Row>
					
				<Banner />
				</Row>
			</Grid>
			
			);
	}
}

module.exports = Person;