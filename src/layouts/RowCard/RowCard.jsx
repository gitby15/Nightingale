import React,{Component} from 'react';
import styles from './RowCard.css';
import {Row} from 'react-bootstrap';

class RowCard extends Component{


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

module.exports = RowCard;