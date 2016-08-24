import React, {Component} from 'react';
import SliderItem from './SliderItem.jsx';
import SliderDots from './SliderDots.jsx';

class Slider extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentLocal:0
		}
	}

	static defaultProps = {
		speed: 1,
		delay: 3,
		pause: true,
		autoplay: true,
		dots: true,
		arrows: true,
		items: [{src:'images/slider1.jpg',alt:'321321'},{src:'images/slider2.jpg',alt:'cbacba'},{src:'images/slider3.jpg',alt:'cbacba'}]
	}

	turn(n){
		var _n = this.state.currentLocal + n;
	    if(_n < 0) {
	      _n = _n + this.props.items.length;
	    }
	    if(_n >= this.props.items.length) {
	      _n = _n - this.props.items.length;
	    }
	    this.setState({currentLocal: _n});
	}
	  // 开始自动轮播
	goPlay() {
	    if(this.props.autoplay) {
	      this.autoPlayFlag = setInterval(() => {
	        this.turn(1);
	      }, this.props.delay * 1000);
	    }
	}

	  // 暂停自动轮播
	pausePlay() {
	    clearInterval(this.autoPlayFlag);
	}

	componentDidMount(){
	  	this.goPlay();
	}

	  render(){
	  	let count = this.props.items.length;
	  	let itemNotes = this.props.items.map((item,idx)=>{
	  		return <SliderItem item={item} count={count} key={'item'+idx} show={this.state.currentLocal==idx}/>
	  	});

	  	let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} currentLocal={this.state.currentLocal} />
	  	//let arrowsNode = <SliderArrows />



	  	let styles = {

	  		container:{
	  			overflow:'hidden',
	  			height:'0px',
	  			paddingBottom:'50%',
	  			position:'relative'

	  		},
	  		slider:{
	  		overflow:'hidden',
	  		margin:'0px',
	  		padding:'0px',

	  		display:'flex',
	  		flexDirection:'row',
	  		justifyContent:'space-around',

	  		flexGrow:'0',

	  		position:'absolute',
	  		left: -100 * this.state.currentLocal +'%',
	  		width:this.props.items.length*100 +'%',
	  		height:'100%',
	  		transition:'0.5s',
	  		
	  		},
	  		bottom:{
				position:'absolute',
				bottom:'0px',
				left:'0px',
				height:'8%',
				minHeight:'20px',
				width:'100%',
				background:'linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.66))'
			}
	  		

	  	}
	  	return(
	  	<div style={styles.container} ref='Container'>
	  		<ul style={styles.slider} ref='Slider'>
	  			{itemNotes}
	  		</ul>
	  		
			<div style={styles.bottom}>

	  		{dotsNode?dotsNode:null}
	  		</div>
	  			
	  		
	  	</div>
	  	)
	  }


	  

}


module.exports = Slider;