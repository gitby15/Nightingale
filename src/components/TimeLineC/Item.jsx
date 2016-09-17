import React, {Component} from 'react';
import styles from './Item.css';
import dp from './default-props.js';


class Item extends Component{
	constructor(props){
		super(props);
		this.state={};
	}



	static defaultProps = dp;







	render(){
		const {pointWidth,pointRadius,pointColor,pointFill,
			lineColor,lineWidth,
			children} = this.props;

		console.log(this.props);
		let x = pointRadius + pointWidth;

		return(
			<div className={styles.container}>
			<svg className={styles.svg} width={x*2}>
				<line stroke={lineColor} strokeWidth={lineWidth} data-timeline-position='Top' x1={x} y1='0' x2={x} y2='49%' />
				<line stroke={lineColor} strokeWidth={lineWidth} data-timeline-position='Bottom' x1={x} y1='51%' x2={x} y2='100%'/>
				<circle fill={pointFill} stroke={pointColor} strokeWidth={pointWidth} cx={x} cy='50%' r={pointRadius} />
			</svg>
			<article className={styles.panel}>
				{children}
			</article>
				

			</div>


			)
	}
}

module.exports = Item;