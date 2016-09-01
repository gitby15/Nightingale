import React, {Component} from 'react';

 
//Layouts
import Banner from '../../layouts/Banner';
import Carousel from '../../components/Carousel';
import BlockList from './BlockList.jsx';
import CanvasPanel from './CanvasPanel.jsx';

import FloatPage from '../../layouts/FloatPage';




class Home extends Component{

	render(){


		return (
			
				<FloatPage>
					<Banner />				
					<Carousel />
					<BlockList />
					<CanvasPanel />
				</FloatPage>
				
				
			
		
		);
	}

}

module.exports = Home;

