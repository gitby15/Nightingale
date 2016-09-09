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

			containerHeight:0,
		}
	}

	static defaultProps = {
		

		first:false,
		last:false,
		
		

		pointStrokeWidth:2,
		transitionTime:1,

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

		let cx = this.state.pointR+this.props.pointStrokeWidth/2;
		let cy = this.props.pointStrokeWidth/2+this.props.panelMargin+panelHeight/2;

		let panelLeft = cx+this.state.pointR+this.props.pointStrokeWidth+10;


		console.log(containerHeight);
		this.setState({
			containerHeight:containerHeight,
			pointX:cx,
			pointY:cy,
			panelLeft:panelLeft
		});

	}

	render(){

		let {pointX,pointY,pointR,pointDashArray,pointDashOffset,
			panelLeft,

			LineX,LineY,
			containerHeight} = this.state;

		let {panelMargin,pointStrokeWidth,lineColor,first,last} = this.props;

		let InlineStyle = {
			panel:{
				position:'absolute',
				top:panelMargin+'px',
				left:(pointR*2+pointStrokeWidth+8)+'px',
			},
			lineTop:{
				stroke:lineColor,
				strokeWidth:'2',
				display:first?'none':'block'
			},
			lineBottom:{
				stroke:lineColor,
				strokeWidth:'2',
				display:first?'none':'block'
			}
		}


		return(
			<div className={styles.container}>
				<svg className={styles.svg} height={containerHeight}>
					<line x1={pointX} y1={0} x2={pointX} y2={pointY} style={InlineStyle.lineTop}/>
					<line x1={pointX} y1={pointY} x2={pointX} y2={containerHeight} style={InlineStyle.lineBottom}/>
					<circle className={styles.point} cx={pointX} cy={pointY} r={pointR} />
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