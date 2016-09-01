import React, {Component} from 'react';

import {Grid} from 'react-bootstrap';

import styles from './FloatPage.css';

class FloatPage extends Component{


	render(){
		let nodes = React.Children.map(this.props.children,(child)=>{
			return child;
		});
		return(
		<div className={this.props.className}>
			<div className={styles.container}>
				{nodes}
			</div>
		</div>
			)
		
	}
}

module.exports = FloatPage;