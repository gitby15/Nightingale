import React, {Component} from 'react';
import styles from './Item.css';

import dp from './default-props.js';
export default class Item extends Component{

	constructor(props){
		super(props);
		this.state = {
			lineDuration:0,
			lineScale:0,
			pointDashArray:0,
			pointDashOffset:0,
			pointX:0,
			pointY:0,
			pointR:0,
			lineArray:"50%",
			lineOffset:"50%",
			lineTopY1:0,
			lineTopY2:0,
			lineBottomY1:0,
			lineBottomY2:0,
			lineBottomColor:'none',
			lineBottomScale:0.5,
			containerHeight:0,
			panelLeft:0,
			panelVisibility:'hidden',
			fullAnimationDuration:0,

		}
	}


	static defaultProps = dp;


	showComponent(){
			/*
			this.state.lineScale = 1,
			this.state.pointDashOffset = 1
			this.state.panelVisibility form 'hidden' to 'visiable'
			this.state.lineBottomColor from 'none' to this.props.lineColor
		*/
		this.setState({
			lineScale:1,
			pointDashOffset:0,
			panelVisibility:'visible',
			lineBottomColor:this.props.lineColor,
			lineBottomScale:1,
			lineOffset:0
		});
	}


	componentWillMount(){
		/*
		before first render, you can only calculate radius of point,
		you should calculate other value you need after first render with componentDidMount() method

		*/

		let pointR = this.props.pointRadius;
		let dashArray = Math.PI*2*pointR;
		let dashOffset = dashArray;//don't show
		//console.log('is wranning here?');
		this.setState({
			
			pointR:pointR,
			pointDashArray:dashArray,
			pointDashOffset:dashOffset,

		});


	}




	componentDidMount(){
		
		/*
			After first render, you can get the dom element, so you can calculate
			the panel size, container size, point position and animation durational time.
			This method isn't use to show the dom, just only calculate all the value you need.

			Every item has a switch, show the dom and begin animation while switch turn on

		

		*/
		const panel = this.refs.panel;
		const {pointR} = this.state;
		const {pointWidth,pointDuration,
			lineVelocity,panelMargin} = this.props;

		let panelHeight, panelLeft, containerHeight;
		let pointX,pointY;

		let lineTopY1,lineTopY2,lineBottomY1,lineBottomY2;
		let lineDuration,fullAnimationDuration;

		// 1. Calculate panel's size
		panelHeight = panel.offsetHeight;
		containerHeight = panelHeight+2*panelMargin;

		// 2. calculate point's position
		pointX = pointR + pointWidth;
		pointY = containerHeight/2;

		// 3. calculate lines position
		lineTopY1 = 0;
		lineTopY2 = pointY-pointR-pointWidth/2;
		lineBottomY1 = pointY+pointR+pointWidth/2;
		lineBottomY2 = containerHeight;

		// 4. calculate animation duration time
		lineDuration = lineTopY2/lineVelocity;
		fullAnimationDuration = 2*lineDuration+pointDuration;


		// 5. calculate position of panel
		
		panelLeft = pointX+pointR+pointWidth+8;

		// 5. put every thing into right position
		this.setState({
			pointX:pointX,
			pointY:pointY,
			panelHeight:panelHeight,
			panelLeft:panelLeft,
			containerHeight:containerHeight,
			// lineArray:lineTopY2-lineTopY1,
			// lineOffset:lineTopY2-lineTopY1,
			lineTopY1:lineTopY1,
			lineTopY2:lineTopY2,
			lineBottomY1:lineBottomY1,
			lineBottomY2:lineBottomY2,
			lineDuration:lineDuration,
			fullAnimationDuration:fullAnimationDuration
		});

		this.showComponent();
		//this.props.emmitDelay(this.props.idx,fullAnimationDuration);
		//console.log(this);
		//console.log(this.props.showComponent);
	}


	componentWillReceiveProps(newProps){

		if(!this.props.showComponent&&newProps.showComponent){
			//console.log(newProps.showComponent);
			this.showComponent();
		}
	}

	render(){
		const {
			lineColor,
			lineWidth,
			pointDuration,
			panelMargin
		} = this.props;

		const {
			lineDuration,
			lineTopOffset,
			lineArray,
			lineOffset,
			lineBottomColor,
			lineBottomOffset,
			pointDashArray,
			pointDashOffset,
			pointX,
			pointY,
			pointR,
			lineTopY1,
			lineTopY2,
			lineBottomY1,
			lineBottomY2,
			containerHeight,
			panelLeft,
			panelVisibility
			//fullAnimationDuration,
			
		} = this.state;



		let InlineStyle = {
			panel:{
				position:'absolute',
				top:panelMargin+'px',
				left:panelLeft+'px',
				//transform:'scale('+lineScale+')',
				visibility:panelVisibility,
				transitionDuration:pointDuration+'ms',
				transitionDelay:lineDuration + 'ms'

				
			},
			lineBottom:{
				stroke:lineColor,
				strokeWidth:lineWidth + 'px',
				//transitionProperty:'stroke-dashoffset',
				transitionDelay:lineDuration+pointDuration+'ms',
				transitionDuration:lineDuration +'ms',
				//transform:'scaleY('+lineScale+')',
				transitionTimingFunction:'linear',
				strokeDasharray:'50%',
				strokeDashoffset:''+lineOffset

			},
			lineTop:{
				stroke:lineColor,
				strokeWidth:lineWidth + 'px',
				//transitionProperty:'transform',
				transitionDuration:lineDuration +'ms',
				//transform:'scaleY('+lineScale+')',
				transitionTimingFunction:'linear',

				strokeDasharray:'50%',
				strokeDashoffset:'calc(10-1)'

			},
			point:{
				transitionDuration:pointDuration+'ms',
				strokeDasharray: pointDashArray+'px',
				strokeDashoffset: pointDashOffset,
				transitionProperty:'stroke-dashoffset',
				transitionDelay:lineDuration+'ms',
				//transformOrigin:pointX+' '+pointY,
				//transform:'rotate(-90deg)'



			}
		}



		return(
			<div className={styles.container}>
				<svg className={styles.svg} height={containerHeight}>
					<line x1={pointX} y1={lineBottomY1} x2={pointX} y2={lineBottomY2} style={InlineStyle.lineBottom}/>
					{/*

					*/}
					<line className={styles.line} x1={pointX} y1={lineTopY1} x2={pointX} style={InlineStyle.lineTop}/>
					<circle className={styles.point} cx={pointX} cy={"50%"} r={pointR} style={InlineStyle.point}/>
				</svg>
				<article className={styles.panel} ref='panel' style={InlineStyle.panel}>
					{this.props.children}
				</article>

			</div>


			)
	}
}
