class SlideItem extends React.Component{
	constructor(props){
		super(props);
		
	}



	static styles = {
		

	}




	render(){

		let {count, item} = this.props;
		let width = 100/this.count+'%'
		return (
			<li>
				<img src={item.src} alt={item.alt}/>
			</li>
			);

	}
}


module.exports = SlideItem;