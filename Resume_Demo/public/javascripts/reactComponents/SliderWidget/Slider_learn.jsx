class Slider extends React.Component{
	constructor(props){
		super(props);
		this.state={
			currentSite:0;
		}
	}

	static defaultProps = {
		speed:1,
		delay:2,
		pause:true,
		autoplay:true,
		dots:true,
		arrows:true,
		items[]
	};

	static autoPlayFlag=null;

	_turn = (n) =>{
		var _n = this.state.currentSite + n;
		if(_n < 0){
			_n = _n+this.props.items.length;
		}
		if(_n >= this.props.items.length){
			_n = _n - this.props.items.length;
		}
		this.setState({currentSite:_n});
	}

	_goPlay = (event) =>{
		if(this.props.autoplay){
			this.autoPlayFlag = setInterval(()=>{
				this.turn(1);
			},this.props.delay*1000);
		}
	}

	_pausePlay = (event) =>{
		clearInterval(this.autoPlayFlag);
	}

	componentDidMount(){
		this.goPlay();
	}

	render(){
		let count = this.props.iems.length;
		let itemNodes = this.props.items.map((item,idx)=>{
			return <SliderItem item={item} count={count} key={'item'+idx} />;
		});

		let arrowNode = <SliderArrows trun={this._turn} count={count} currentSite={this.state.currentSite} />

		 return (
		      <div
		        className="slider"
		        onMouseOver={this.props.pause?this.pausePlay:null} onMouseOut={this.props.pause?this.goPlay:null}>
		          <ul style={{
		              left: -100 * this.state.nowLocal + "%",
		              transitionDuration: this.props.speed + "s",
		              width: this.props.items.length * 100 + "%"
		            }}>
		              {itemNodes}
		          </ul>
		          {this.props.arrows?arrowsNode:null}
		          {this.props.dots?dotsNode:null}
		        </div>
		      );
	}

}