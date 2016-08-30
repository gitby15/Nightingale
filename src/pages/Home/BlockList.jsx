import React, {Component} from 'react';
import ReactDom from 'react-dom';
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



	handleClick(i,target){

		// setTimeout(()=>{
		// 	
		// },1400);
		console.log('click');
		let dom = ReactDom.findDOMNode(i);
		let fun = ()=>{
			dom.removeEventListener('animationend',fun);
			window.location.href='#/'+target;
				i.setState({
				anim:null
			});
		}
		dom.addEventListener('animationend',fun);

		i.setState({
			anim:styles.begin
		});
		console.log(dom.eventListener);

	}

	render(){

		//need to refactory, imgPath from Home component




		return(
				<Row ref='container'>
					<Col xs={3} sm={3} className={this.state.anim} >
						
						<ItemBlock imgPath={{front:'images/person.jpg',
											back :'images/personbg.jpg'}}
									ref='person'
									onClick={this.handleClick.bind(this,this,'person')}
									/>
						
					</Col>
					<Col xs={3} sm={3}>
						<ItemBlock imgPath={{front:'images/projects.jpg',
											back :'images/projectsbg.jpg'}}
									ref={'project'}
									onClick={this.handleClick.bind(this,this,'project')	}	/>
					</Col>
					<Col xs={3} sm={3}>
						<ItemBlock imgPath={{front:'images/demo.jpg',
											back :'images/demobg.jpg'}}
									ref='demo'
									onClick={this.handleClick.bind(this,this,'demo')}/>
					</Col>
					<Col xs={3} sm={3}>
						<ItemBlock imgPath={{front:'images/other.jpg',
											back :'images/otherbg.jpg'}}
									ref='other'
									onClick={this.handleClick.bind(this,this,'other')}/>
					</Col>
				</Row>

			);
	}
}

module.exports = BlockList;