class SliderArrows extends Component{
	constructor(props){
		super(props);
	}

	_handleArrowClick = (option) =>{
		this.props.turn(option);
	}

	render(){
		return(
			<div className='slider-arrows-wrap'>
				<span
					className='slider-arrow slider-arrow-left'
					onClick={this._handleArrowClick(-1)}>
					left
				</span>
				<span
		          className="slider-arrow slider-arrow-right"
		          onClick={this.handleArrowClick(1)}>
		          right
		        </span>
			</div>
			)
	}

}