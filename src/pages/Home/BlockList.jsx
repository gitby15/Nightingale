import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Radium, {StyleRoot} from 'radium';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from './BlockList.css';

import ItemBlock from './../../components/ItemBlock';
import RowCard from '../../layouts/RowCard';
import FloatPage from '../../layouts/FloatPage';

class BlockList extends Component{
	constructor(props){
		super(props);
		this.state={
			anim:''
		}

	}



	handleClick(target){



		let dom = ReactDom.findDOMNode(this.refs[target]);


		// console.log(dom.classList);

		let fun = (event)=>{
			dom.classList.remove(styles.animat);
			this.refs[target].render();
			//dom.class
			console.log('--- location href ---');
			window.location.href='#/'+target;

		}


		dom.addEventListener('animationend',fun);
		dom.addEventListener('animationend',()=>{
			dom.removeEventListener('animationend',fun);
		});
		//broswer compat
		dom.addEventListener('webkitAnimationEnd',fun);
		dom.addEventListener('webkitAnimationEnd',()=>{
			dom.removeEventListener('webkitAnimationEnd',fun);
		});




		dom.classList.add(styles.animat);
		this.refs[target].render();

	}

	render(){

		//need to refactory, imgPath from Home component




		return(
				<RowCard>
					
						<ItemBlock imgPath={{front:'images/person.jpg',
											back :'images/personbg.jpg'}}
									ref='person'
									onClick={this.handleClick.bind(this,'person')}
									/>
					
					
						<ItemBlock imgPath={{front:'images/projects.jpg',
											back :'images/projectsbg.jpg'}}
									ref='project'
									onClick={this.handleClick.bind(this,'project')}/>
					
						<ItemBlock imgPath={{front:'images/demo.jpg',
											back :'images/demobg.jpg'}}
									ref='demo'
									onClick={this.handleClick.bind(this,'demo')}/>
					
						<ItemBlock imgPath={{front:'images/other.jpg',
											back :'images/otherbg.jpg'}}
									ref='other'
									onClick={this.handleClick.bind(this,'other')}/>
				</RowCard>

			);
	}
}

module.exports = BlockList;