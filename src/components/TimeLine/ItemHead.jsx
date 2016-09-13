import React, {Component} from 'react';
import styles from './Item.css';
import dp from './default-props.js';

export default class ItemHead extends Component{

	constructor(props){
		super(props);
		this.state = {
			lineDuration:0,
			lineScale:0,
			lineBottomY1:0,
			lineBottomY2:0,

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


		let pointX = pointR + pointWidth;
		let pointY = pointR + pointWidth;

		let lineBottomY1,lineBottomY2,lineDuration;
		let containerHeight,fullAnimationDuration;


		// 1. calculate lines position
		lineBottomY1 = pointY+pointR+pointWidth/2;
		lineBottomY2 = lineBottomY1+pointR+pointWidth;

		// 2. calculate container's size and panel's size
		containerHeight = lineBottomY2;

		

		// 3. calculate animation duration time
		lineDuration = (lineBottomY2 - lineBottomY1)/(lineVelocity);
		fullAnimationDuration = lineDuration+pointDuration;
		this.setState({
			pointX:pointX,
			pointY:pointY,
			pointR:pointR,
			pointDashArray:dashArray,

			pointDashOffset:dashOffset,//don't show

			lineScale:0,//don't show
			lineBottomY1:lineBottomY1,
			lineBottomY2:lineBottomY2,
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
			lineBottomY1,
			lineBottomY2,
			containerHeight,
			//fullAnimationDuration,

		} = this.state;

		let InlineStyle = {
			
			lineBottom:{
				stroke:lineColor,
				strokeWidth:lineWidth + 'px',
				transitionProperty:'transform',
				transitionDelay:pointDuration+'ms',
				transitionDuration:lineDuration +'ms',
				transform:'scaleY('+lineScale+')',
				//transitionFunction:'linear'

			},
			point:{
				transitionDuration:pointDuration+'ms',
				strokeDasharray: pointDashArray+'px',
				strokeDashoffset: pointDashOffset,
				transitionProperty:'stroke-dashoffset'

			}
		}




		return(
			<div className={styles.container}>
				<svg className={styles.svg} height={containerHeight}>
					<line className={styles.line} x1={pointX} y1={lineBottomY1} x2={pointX} y2={lineBottomY2} style={InlineStyle.lineBottom}/>
					<circle className={styles.point} cx={pointX} cy={pointY} r={pointR} style={InlineStyle.point}/>
				</svg>
			</div>


			)
	}
}
