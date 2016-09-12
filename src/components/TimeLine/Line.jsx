import React, {Component} from 'react';
import styles from './Line.css';

class Line extends Component{

	constructor(props){
		super(props);
		this.state = {
			showLine:false,
			showPoint:false,
			showPanel:false,

			pointX:0,
			pointY:0,
			pointR:0,

			//container properties
			containerHeight:0,
		}
		this.showNext = function(){
			
		}



	}


	showNext(){}
	static showDom(cback){
		console.log('showDom');
		console.log(this.props);
			//console.log(this.state);
	}

	static defaultProps = {
		//velocity = 0.12px/ms
		velocity:0.15,
		lineVelocity:0.12,
		pointTransitionDuration:1000,
		pointDuration:1000,
		first:false,
		last:false,
		//showNext:Line.showNext,
		showDom:Line.showDom,

		pointStrokeWidth:2,
		

		pointRadius:6,
		pointColor:'pink',
		pointStrokeWidth:2,
		

		panelMinWidth:250,
		panelMinHeight:100,
		panelBorderWidth:1,
		panelMargin:10,

		lineColor:'blue'
	}



	componentWillMount(){

		/*
		before first render, you can only calculate radius of point,
		you should calculate other value you need after first render with componentDidMount() method

		*/
		let radius = this.props.pointRadius;
		let dashArray = Math.PI*2*radius;
		let dashOffset = dashArray;//don't dhow
		this.setState({
			
			pointR:radius,
			pointDashArray:dashArray,
			pointDashOffset:dashOffset,

		})


	}


	

	componentWillReceiveProps(newProps){
		//console.log(newProps);
	}


	componentDidMount(){
		/*
			After first render, you can get the dom element, so you can calculate
			the panel size, container size, point position and animation durational time.
			This method isn't use to show the dom, just only calculate all the value you need.

			Every item has a switch, show the dom and begin animation while switch turn on

		*/


		// 0. variable statement
		let {panel, lineTop, lineBottom, point} = this.refs;
		let {panelMargin,lineVelocity,pointStrokeWidth,pointDuration,first,last} = this.props;

		let {pointR} = this.state;



		let panelHeight = this.refs.panel.offsetHeight;
		let containerHeight = panelHeight+2*this.props.panelMargin;
		let velocity = this.props.velocity;

		let LineTransitionDelay = (containerHeight - this.state.pointR - this.props.pointStrokeWidth)/velocity/2;
		


		let lineTopY2,lineBottomY1,lineDuration;
		let cx,cy;
		let fullAnimationDuration;


		// 1. calculate container's size and panel's size
		panelHeight = panel.offsetHeight;
		containerHeight = panelHeight+2*panelMargin;

		// 2. calculate point position

		cx = pointR + pointStrokeWidth;
		cy = first?(pointStrokeWidth+pointR):(containerHeight/2);

		// 3. calculate lines position
		lineTopY2 = cy-pointR-pointStrokeWidth/2;
		lineBottomY1 = cy+pointR+pointStrokeWidth/2;

		// 4. calculate animation duration time
		lineDuration = (containerHeight - pointR*2 - pointStrokeWidth)/(2*lineVelocity);
		fullAnimationDuration = 2*lineDuration+pointDuration;


		
		

		let panelLeft = cx+this.state.pointR+this.props.pointStrokeWidth+10;

		let pointTransitionDuration = this.props.pointTransitionDuration;

		this.setState({
			containerHeight:containerHeight,
			pointX:cx,
			pointY:cy,
			panelLeft:panelLeft,
			LineTransitionDelay:LineTransitionDelay,
			showLineTop:true
		});

		setTimeout(()=>{
			this.setState({
				pointTransitionDuration:pointTransitionDuration,
				pointDashOffset:0,//show the point

			});

			setTimeout(()=>{
			this.setState({

				showLineBottom:true

			});
		},pointTransitionDuration)

		},LineTransitionDelay);

		
	}



	render(){

		let {pointX,pointY,pointR,pointDashArray,pointDashOffset,
			pointTransitionTime,pointTransitionDelay,pointTransitionDuration,
			panelLeft,

			LineX,LineY,LineTransitionDelay,showLineTop,showLineBottom,
			containerHeight} = this.state;

		let {panelMargin,pointStrokeWidth,
			lineColor,first,last} = this.props;



		let InlineStyle = {
			panel:{
				position:'absolute',
				top:panelMargin+'px',
				left:(pointR*2+pointStrokeWidth+8)+'px',
				display:(first||last)?'none':'block'
			},
			lineTop:{
				stroke:lineColor,
				strokeWidth:'2',
				display:first?'none':'block',
				transitionDuration:LineTransitionDelay+'ms',
				transform:'scaleY('+(showLineTop?1:0)+')',
			//	transitionFunction:'linear'
			},
			lineBottom:{
				stroke:'red',
				strokeWidth:'2',
				display:last?'none':'block',
				transitionDuration:LineTransitionDelay+'ms',
				transform:'scaleY('+(showLineBottom?1:0)+')',

		//		transitionFunction:'linear'

			},
			point:{
				transitionDuration:pointTransitionDuration+'ms',
				strokeDasharray: pointDashArray+'px',
				strokeDashoffset: pointDashOffset,
			}
		}


		return(
			<div className={styles.container}>
				<svg className={styles.svg} height={containerHeight}>
					<line x1={pointX} y1={pointY} x2={pointX} y2={containerHeight} style={InlineStyle.lineBottom}/>
					<line ref='lineTop' x1={pointX} y1={0} x2={pointX} y2={pointY-pointR} style={InlineStyle.lineTop}/>
					<circle ref='point' className={styles.point} cx={pointX} cy={pointY} r={pointR} style={InlineStyle.point}/>
				</svg>
				<article className={styles.panel} ref='panel' style={InlineStyle.panel}>
					{this.props.children}
				</article>

			</div>


			)
	}
}

module.exports = Line;