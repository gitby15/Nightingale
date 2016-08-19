class SliderDot extends React.Component{
	constructor(props){
		super(props);
	}

	_handleDotClick = (i) =>{
		let option = i - this.props.currentSite;
		this.props.turn(option);
	}

	render(){
		let dotNodes = [];
		let {count,currentSite} = this.props;
		for(let i=0; i<count; i++){
			dotNodes[i] = (
				<span
					key={'dot'+i}
					className={'slider-dot' + (i === this.currentSite?'slider-dot-slected':'')}
					onClick={this._handleDotClick}
				</span>
				);
		}

		return (
			<div className="slider-dot-wrap">
				{dotNodes}
			</div>
			)

	}
}