import React, {Component} from 'react';
import Radium, {Style} from 'radium';

import ItemBlock from './../../components/ItemBlock';
import styles from './Home.css';
 
//Layouts
import Banner from '../../layouts/Banner';
import CarouselBody from './CarouselBody';
import BlockList from './BlockList.jsx';
import CanvasPanel from './CanvasPanel.jsx';

/* Import React-Bootstrap Components*/
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';


class Home extends Component{

	render(){


		return (
			<Grid className={styles.container}>
				
				<Banner />				
				<CarouselBody />
				<BlockList />
				<CanvasPanel />
				
			</Grid>
		
		);
	}

}

module.exports = Radium(Home);

