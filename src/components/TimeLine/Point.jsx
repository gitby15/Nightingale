import React, {Component} from 'react';
import styles from './Point.css';

class Point extends Component{

	constructor(props){
		super(props);
		this.state = {
			svgWidth:0,
			show:false,
		}
		
	}

	static defaultProps = {
		strokeColor:'pink',
		strokeWidth:2,
		transitionTime:'1s'
	}

	componentDidMount(){
		this.setState({svgWidth:this.refs.svg.clientWidth});
		//this.state.svgWidth = this.refs.svg.svgWidth;
		setTimeout(()=>{
			this.setState({
			show:true
		})
		},300);
	}




	render(){
		
		let svgWidth = this.state.svgWidth;
		let radius = (svgWidth-this.props.strokeWidth)/2;
		let dashArray = Math.PI*2*radius;
		//console.log(svgWidth);

		let circle = {
			strokeWidth:this.props.strokeWidth+'px',
			stroke:this.props.strokeColor,
			strokeDasharray: dashArray+'px',
			transition: this.state.show?this.props.transitionTime:'0s',
			strokeDashoffset: this.state.show?0:dashArray+'px',
			r:radius+'px'
		}

		return(
			<div className={styles.container}>
				<svg className={styles.svg} ref='svg'>
					<circle className={styles.circle} style={circle}/>
				</svg>
				<div className={styles.line}></div>
			</div>


			)
	}
}

module.exports = Point;