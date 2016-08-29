import React, {Component} from 'react';
import Radium, {Style} from 'radium';

import ItemBlock from './../../components/ItemBlock';

 
//Layouts
import Banner from './Banner.jsx';
import CarouselBody from './CarouselBody';
import BlockList from './BlockList.jsx';
import CanvasPanel from './CanvasPanel.jsx';

/* Import React-Bootstrap Components*/
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';


class Home extends Component{

	render(){


		return (
			<Grid>
				
				<Banner />				
				<CarouselBody />
				<BlockList />
				<CanvasPanel />
				
			</Grid>
		
		);
	}

}

module.exports = Radium(Home);

