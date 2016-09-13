import React, {Component} from 'react';
import styles from './Item.css';
import dp from './default-props.js';

export default class ItemEnd extends Component{

	constructor(props){
		super(props);
		this.state = {
			lineDuration:0,
			lineScale:0,
			lineTopY1:0,
			lineTopY2:0,

			pointDashArray:0,
			pointDashOffset:0,
			pointX:0,
			pointY:0,
			pointR:0,

			containerHeight:0,
			fullAnimationDuration:0
		}
	}

	static defaultProps = dp;

	componentWillMount(){
		/*
		calculate the point's value before first render, x,y,r,dashArray

		*/

		const {
			lineVelocity,
			pointWidth,
			pointDuration,
			pointRadius
		} = this.props;

		let pointR = pointRadius;
		let dashArray = Math.PI*2*pointR;
		let dashOffset = dashArray;//don't show


		let pointX,pointY;

		let lineTopY1,lineTopY2,lineDuration;
		let containerHeight,fullAnimationDuration;


		// 1. calculate line position
		lineTopY1 = 0;
		lineTopY2 = pointR+pointWidth/2;

		// 2. calculate point position
		pointX = pointR + pointWidth;
		pointY = pointR + pointWidth/2 + lineTopY2;

		// 2. calculate container's size and panel's size
		containerHeight = pointY + pointR + pointWidth;

		

		// 3. calculate animation duration time
		lineDuration = (lineTopY2 - lineTopY1)/(lineVelocity);
		fullAnimationDuration = lineDuration+pointDuration;
		this.setState({
			pointX:pointX,
			pointY:pointY,
			pointR:pointR,
			pointDashArray:dashArray,

			pointDashOffset:dashOffset,//don't show

			lineScale:0,//don't show
			lineTopY1:lineTopY1,
			lineTopY2:lineTopY2,
			lineDuration:lineDuration,

			containerHeight:containerHeight,
			fullAnimationDuration:fullAnimationDuration

		});
	}

	componentDidMount(){
		
		//this.showDom();


	}


	showDom(){
		/*
			this.state.lineScale = 1,
			this.state.pointDashOffset = 1
		*/
		this.setState({
			lineScale:1,
			pointDashOffset:0
		})
	}



	render(){

		const {
			lineColor,
			lineWidth,
			pointDuration
		} = this.props;

		const {
			lineDuration,
			lineScale,
			pointDashArray,
			pointDashOffset,
			pointX,
			pointY,
			pointR,
			lineTopY1,
			lineTopY2,
			containerHeight,
			//fullAnimationDuration,
			
		} = this.state;

		let InlineStyle = {
			
			lineTop:{
				stroke:lineColor,
				strokeWidth:lineWidth + 'px',
				transitionProperty:'transform',
				transitionDuration:lineDuration +'ms',
				transform:'scaleY('+lineScale+')',
				//transitionFunction:'linear'

			},
			point:{
				transitionDuration:pointDuration+'ms',
				strokeDasharray: pointDashArray+'px',
				strokeDashoffset: pointDashOffset,
				transitionProperty:'stroke-dashoffset',

				transitionDelay:lineDuration+'ms',

			}
		}




		return(
			<div className={styles.container}>
				<svg className={styles.svg} height={containerHeight}>
					<line className={styles.line} x1={pointX} y1={lineTopY1} x2={pointX} y2={lineTopY2} style={InlineStyle.lineTop}/>
					<circle className={styles.point} cx={pointX} cy={pointY} r={pointR} style={InlineStyle.point}/>
				</svg>
			</div>


			)
	}
}
