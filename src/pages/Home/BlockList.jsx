import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from './BlockList.css';

import ItemBlock from './../../components/ItemBlock';

class BlockList extends Component{
	constructor(props){
		super(props);
		this.state={
			anim:''
		}

	}



	handleClick(i){

		// setTimeout(()=>{
		// 	window.location.href='#/person';
		// },1400);
		// this.setState({
		// 	anim:styles.begin
		// });
		console.log(i);

	}

	render(){

		//need to refactory, imgPath from Home component




		return(
				<Row ref='container'>
					<Col xs={3} sm={3} className={this.state.anim} >
						
						<ItemBlock imgPath={{front:'images/person.jpg',
											back :'images/personbg.jpg'}}
									
									onClick={this.handleClick.bind(this,this)}
									/>
						
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