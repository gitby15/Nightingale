import React, {Component} from 'react';
import styles from './Point.css';

class Point extends Component{

	constructor(props){
		super(props);
		this.state = {
			showPanel:false
			
		};


		
	}

	static defaultProps = {
		
		
		
		


		transitionTime:1,

		pointRadius:6,
		pointColor:'pink',
		pointStrokeWidth:2,

		panelWidth:250,
		panelBorderWidth:1,
		panelMargin:10,
		//index:NaN,



	}

	componentWillMount(){
		let radius = this.props.pointRadius;
		let cx = radius+this.props.pointStrokeWidth/2;
		let cy = radius+this.props.pointStrokeWidth/2;
		let dashArray = Math.PI*2*radius;
		let dashOffset = dashArray;//don't dhow

		let panelLeft = cx+radius+this.props.pointStrokeWidth+10;


		let x1 = cx;
		let y1 = cy+radius+this.props.pointStrokeWidth/2;
		let x2 = x1;
		//let y2 = this.state.panelHeight+this.props.panelMargin;
		let y2 = y1;

		this.setState({
			pointX:cx,
			pointY:cy,
			pointR:radius,
			pointDashArray:dashArray,
			pointDashOffset:dashOffset,

			panelLeft:panelLeft,

			lineX1:x1,
			lineY1:y1,
			lineX2:x2,
			lineY2:y2,

			showLine:false

		})




	}



	componentDidMount(){

		let y2 = this.refs.panel.offsetHeight+this.props.panelMargin;
		this.setState({
			panelHeight:this.refs.panel.offsetHeight,
			lineY2:y2,
			showLine:true,
			pointDashOffset:0,
			showPanel:true

		})

		this.point = this.refs.point;
		this.svg = this.refs.svg;
		this.line = this.refs.line;

		



	}

	


	render(){
		
		let radius = this.state.pointR;
		let dashArray = this.state.pointDashArray;
		let cx = this.state.pointX;
		let cy = this.state.pointY;
		
		let panelLeft = this.state.panelLeft;
		let x1 = this.state.lineX1;
		let y1 = this.state.lineY1;
		let x2 = this.state.lineX2;
		//let y2 = this.state.panelHeight+this.props.panelMargin;
		let y2 = this.state.lineY2;


		let InlineStyles = {
			circle:{
					strokeWidth:this.props.pointStrokeWidth+'px',
					stroke:this.props.pointColor,
					strokeDasharray: dashArray+'px',
					transition: this.props.transitionTime+'s',
					strokeDashoffset: this.state.pointDashOffset,
					fill:'#fff'
					
				},
			panel:{
				left:panelLeft+'px',
				top:"0",
				transition:this.props.transitionTime+'s',
				transitionDelay:this.props.transitionTime+'s',
				transform:'translateY(-50%) translateY('+radius+'px)',
				width:this.props.panelWidth+'px',
				border:'solid black',
				borderWidth:this.props.panelBorderWidth+'px',
				visibility:this.state.showPanel?'visible':'hidden'

			},
			line:{
				transform:'scaleY('+(this.state.showLine?1:0)+')',
				transition:this.props.transitionTime+'s',
				transitionDelay:this.props.transitionTime+'s'
			}
		}


		return(
			<div className={styles.container}>
			{
				/*
					<line className={styles.line} style={InlineStyles.line}
						 x1={x1} y1={y1} x2={x2} y2={y2}  stroke='black'>
						<set
							attributeName='y2'
							to={y2}
							begin={this.props.transitionTime*2+'s'}/>
						<set
							attributeName='display'
							to={'block'}
							begin={this.props.transitionTime+'s'}/>
						<animate 
							attributeName='y2'
							from={y1}
							to={y2}
							begin={this.props.transitionTime+'s'}
							dur={this.props.transitionTime+'s'}/>
					</line>


				*/
			}
				<svg className={styles.svg} ref='svg' height={y2} ref='svg'>
					 <line className={styles.line} style={InlineStyles.line}
					 	x1={x1} y1={y1} x2={x2} y2={y2}
					 />
					 <circle className={styles.circle} style={InlineStyles.circle}
					 	 cx={cx} cy={cy} r={radius} ref='point'/>
				</svg>

				<article className={styles.panel} style={InlineStyles.panel} ref='panel'> 
					<p>sadsdadasdas</p><p>sadsdadasdas</p><p>sadsdadasdas</p>
					{this.props.children}
				</article>
				
			</div>


			)
	}
}

module.exports = Point;