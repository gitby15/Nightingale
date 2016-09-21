import React, {Component} from 'react';
import styles from './Item.css';
import dp from './default-props.js';


class ItemEnd extends Component{
	constructor(props){
		super(props);
		this.state={
			fullDuration:0,
			containerHeight:0,
			lineDuration:0,
			lineOffset:'70%',
			pointOffset:0,
			pointDashArray:0,
			panelVisibility:'hidden',
			panelScale:0
		};
	}

	showThisComponent(){
		this.setState({
				lineOffset:'0',
				pointOffset:'0',
				panelVisibility:'visible',
				panelScale:1
			});
	}



	componentWillMount(){
		const {pointRadius} = this.props;

		let pointDashArray = pointRadius*2*Math.PI;
		this.setState({
			pointOffset:pointDashArray,
			pointDashArray:pointDashArray
		})


	}


	static defaultProps = dp;


	componentDidMount(){
		let containerHeight;
		let lineDuration;
		let fullDuration;
		//const panel = this.refs.panel;
		const {panelMargin,lineVelocity,pointDuration} = this.props;





		// 0. calculate height container should be
		containerHeight = '30px';

		// 1. calculate line duration
		lineDuration = (containerHeight/2)/lineVelocity;

		// 3. calculate full duration time
		fullDuration = 2*lineDuration+pointDuration;


		this.setState({
			containerHeight:containerHeight,
			lineDuration:lineDuration,
			fullDuration:fullDuration


		});

		this.showThisComponent();
		




	}




	render(){
		const {pointWidth,pointRadius,pointColor,pointFill,pointDuration,
			lineColor,lineWidth,
			children} = this.props;


		const {lineOffset,lineDuration,
			fullDuration,containerHeight,
			pointDashArray,pointOffset,
			panelVisibility,panelScale} = this.state;

		let x = pointRadius + pointWidth;
		let InlineStyle = {
			panel:{
				
				visibility:panelVisibility,
				transform:'scale('+panelScale+')',
				transitionDuration:pointDuration+'ms',
				transitionDelay:lineDuration + 'ms'

				
			},
			lineBottom:{
				
				transitionProperty:'stroke-dashoffset',
				transitionDelay:lineDuration+pointDuration+'ms',
				transitionDuration:lineDuration +'ms',
				
				transitionTimingFunction:'linear',
				strokeDasharray:'71%',
				strokeDashoffset:''+lineOffset

			},
			lineTop:{
				//stroke:'red',
				transitionProperty:'stroke-dashoffset',
				transitionDuration:lineDuration +'ms',
				transitionTimingFunction:'linear',

				strokeDasharray:'69%',
				strokeDashoffset:''+lineOffset

			},
			point:{
				transitionDuration:pointDuration+'ms',
				strokeDasharray: pointDashArray+'px',
				strokeDashoffset: pointOffset,
				transitionProperty:'stroke-dashoffset',
				transitionDelay:lineDuration+'ms',
				//transformOrigin:pointX+' '+pointY,
				//transform:'rotate(-90deg)'



			}
		}

		return(
			<div className={styles.container}>
			<svg className={styles.svg} width={x*2} height={containerHeight}>
				<line stroke={lineColor} strokeWidth={lineWidth} data-timeline-position='Top' x1={x} y1='0' x2={x} y2='50%' style={InlineStyle.lineBottom}/>
				<circle fill={pointFill} stroke={pointColor} strokeWidth={pointWidth} cx={x} cy='50%' r={pointRadius} style={InlineStyle.point}/>
			</svg>
				

			</div>


			)
	}
}

module.exports = ItemEnd;