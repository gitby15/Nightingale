import React, {Component} from 'react';
import styles from './Point.css';

class Point extends Component{

	constructor(props){
		super(props);
		this.state = {
			svgWidth:0,
			showCircle:false,
			showLine:true,
			panelHeight:0
			
		}
		
	}

	static defaultProps = {
		circleWidth:14,
		circleOffsetX:0,
		circleOffsetY:0,
		circleStrokeColor:'pink',
		circleStrokeWidth:2,
		transitionTime:1,
		panelOffsetX:0,
		panelOffsetY:0
	}

	componentDidMount(){
		//this.setState({svgWidth:this.refs.svg.clientWidth});
		// //this.state.svgWidth = this.refs.svg.svgWidth;
		//this.setState({});
		setTimeout(()=>{
			this.setState({
			showCircle:true,
			panelHeight:this.refs.panel.offsetHeight
		})
		},100);

		

		// setTimeout(()=>{
		// 	this.setState({
		// 	showLine:true
		// })
		// },2300);


	}




	render(){
		
		let radius = (this.props.circleWidth-this.props.circleStrokeWidth)/2;
		let dashArray = Math.PI*2*radius;
		let cx = this.props.circleWidth	/2 + this.props.circleOffsetX;
		let cy = this.props.circleWidth	/2 + this.props.circleOffsetY;
		//console.log(svgWidth);

		let panelTop = cy+this.props.panelOffsetY;
		let panelLeft = cx+radius+this.props.circleStrokeWidth+this.props.panelOffsetX;



		let x1 = cx;
		let y1 = cy+radius+this.props.circleStrokeWidth/2;
		let x2 = x1;
		let y2 = this.state.panelHeight+panelTop;
		console.log('panelEnd');
		console.log(this.state.panelHeight);
		//let y2 = y1;


		let InlineStyles = {
			circle:{
					strokeWidth:this.props.circleStrokeWidth+'px',
					stroke:this.props.circleStrokeColor,
					strokeDasharray: dashArray+'px',
					transition: this.state.showCircle?this.props.transitionTime+'s':'0s'+' ease-in',
					strokeDashoffset: this.state.showCircle?0:dashArray+'px'
					
				},
			line:{
					transition: this.transitionTime+'s',
					//display:this.state.showLine?'block':'none'
					display:'none'
					
				},

			panel:{
				top:panelTop+'px',
				left:panelLeft+'px'
			}
		}


		return(
			<div className={styles.container}>
				<svg className={styles.svg} ref='svg' height={y2}>
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
					 <circle className={styles.circle} style={InlineStyles.circle}
					 	 cx={cx} cy={cy} r={radius}/>
				</svg>

				<article className={styles.panel} style={InlineStyles.panel} ref='panel'> 
					<h2>Title</h2>
					<p>123123j123kj21k3j12lk3jl12j3l1</p>
				</article>
				
			</div>


			)
	}
}

module.exports = Point;