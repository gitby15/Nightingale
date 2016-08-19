class SliderDot extends React.Component{
	constructor(props){
		super(props);
	}


	handleDotClick(i){
		let option = i - this.props.currentLocal;
		this.props.turn(option);
	}

	render(){
		let dotNodes = [];
		let {count,currentSite} = this.props;
		for(let i = 0; i<count; i++){
			dotNodes[i] = (
				<span
					key={'dot'+i}
					onClick={this.handleDotClick.bind(this,i)}
				</span>
				);
		}

		return (
			<div>
				{dotNodes}
			</div>)
	}
}