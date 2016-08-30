import React, {Component} from 'react';
import CarouselItem from './CarouselItem.jsx';
import CarouselDots from './CarouselDots.jsx';
//import CarouselArrows from './CarouselArrows.jsx';

class Carousel extends Component{
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

	componentWillUnmount(){
		this.pausePlay();
	}

	  render(){
	  	let count = this.props.items.length;
	  	let itemNotes = this.props.items.map((item,idx)=>{
	  		return <CarouselItem item={item} count={count} key={'item'+idx} show={this.state.currentLocal==idx}/>
	  	});

	  	let dotsNode = <CarouselDots turn={this.turn.bind(this)} count={count} currentLocal={this.state.currentLocal} />

	  //	let arrowsNode = <CarouselArrows />



	  	let styles = {

	  		wrapper:{
	  			overflow:'hidden',
	  			height:'0px',
	  			paddingBottom:'50%',//2:1
	  			position:'relative',
	  			width:'100%',
	  			margin:'0'

	  		},
	  		carousel:{
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
	  		transition:'0.5s'
	  		
	  		},
	  		bottom:{
				position:'absolute',
				bottom:'0px',
				left:'0px',
				height:'8%',
				minHeight:'20px',
				width:'100%',
				background:'linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.66))'
			},
			arrows:{
				position:'absolute',
				width:'100%',
				top:'50%',
				transform:'translateY(-50%)',
				height:'10%',
				display:'flex',
				alignItems:'center'

			}
	  		

	  	}
	  	return(
	  	<div style={styles.wrapper} ref='wrapper'
	  		 onMouseOver={this.pausePlay.bind(this)}
	  		 onMouseOut={this.goPlay.bind(this)}>
	  		<ul style={styles.carousel} ref='Carousel'>
	  			{itemNotes}
	  		</ul>
	  		
			<div style={styles.bottom}>

	  		{dotsNode?dotsNode:null}
	  		</div>

	  			
	  		
	  	</div>
	  	)
	  }


	  

}


module.exports = Carousel;