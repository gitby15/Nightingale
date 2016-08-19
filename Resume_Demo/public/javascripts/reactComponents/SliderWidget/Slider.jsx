let SliderItem = require('./SliderItem.jsx');

class Slider extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentLocal:0
		}
	}

	static defaultProps = {
		speed: 1,
		delay: 2,
		pause: true,
		autoplay: true,
		dots: true,
		arrows: true,
		items: [{src:'123123',alt:'321321'},{src:'abcabc',alt:'cbacba'}]
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
	  	let items = [{src:'123123',alt:'321321'},{src:'abcabc',alt:'cbacba'}]

	  	let itemNotes = this.props.items.map((item,idx)=>{
	  		return <SliderItem item={item} count={count} key={'item'+idx}/>
	  	})
	  	return(
	  	<div>
	  		<ul>
	  			{itemNotes
	  			}
	  		</ul>
	  	</div>
	  	)
	  }


	  

}


module.exports = Slider;