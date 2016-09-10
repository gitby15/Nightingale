import React, {Component} from 'react';
import styles from './Line.css';

class Line extends Component{

	constructor(props){
		super(props);
		this.state = {
			showLine:false,
			showPoint:false,
			showPanel:false,
			pointTransitionDuration:0,


			pointX:0,
			pointY:0,
			pointR:0,

			//container properties
			containerHeight:0,
		}
	}



	static defaultProps = {
		//velocity = 0.15px/ms
		velocity:0.15,


		first:false,
		last:false,
		
		

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
		let radius = this.props.pointRadius;
		
		let dashArray = Math.PI*2*radius;
		let dashOffset = dashArray;//don't dhow
		this.setState({
			
			pointR:radius,
			pointDashArray:dashArray,
			pointDashOffset:dashOffset,

		})


	}

	componentDidMount(){

		//let panel = this.refs.panel;

		let panelHeight = this.refs.panel.offsetHeight;
		let containerHeight = panelHeight+2*this.props.panelMargin;
		let velocity = this.props.velocity;

		let LineTransitionDelay = containerHeight/velocity/2;
		let line = this.refs.lineTop;
		this.line = line;
		let cx = this.state.pointR+this.props.pointStrokeWidth/2;
		let cy = this.props.pointStrokeWidth/2+this.props.panelMargin+panelHeight/2;

		let panelLeft = cx+this.state.pointR+this.props.pointStrokeWidth+10;

		let pointTransitionDuration = 1000;


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
			},
			lineTop:{
				stroke:lineColor,
				strokeWidth:'2',
				display:first?'none':'block',
				transitionDuration:LineTransitionDelay+'ms',
				transform:'scaleY('+(showLineTop?1:0)+')'
			},
			lineBottom:{
				stroke:'red',
				strokeWidth:'2',
				display:first?'none':'block',
				transitionDuration:LineTransitionDelay+'ms',
				transform:'scaleY('+(showLineBottom?1:0)+')'

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
					<line ref='lineTop' x1={pointX} y1={0} x2={pointX} y2={pointY} style={InlineStyle.lineTop}/>
					<circle ref='point' className={styles.point} cx={pointX} cy={pointY} r={pointR} style={InlineStyle.point}/>
				</svg>
				<article className={styles.panel} ref='panel' style={InlineStyle.panel}>
					<p>123123</p>

					<p>123123</p>

					<p>123123</p>
				</article>

			</div>


			)
	}
}

module.exports = Line;