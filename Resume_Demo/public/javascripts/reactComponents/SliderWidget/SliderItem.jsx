import React, {Component} from 'react';

class SlideItem extends React.Component{
	constructor(props){
		super(props);
		
	}



	render(){
		let {count, item, show} = this.props;
		let width = 100/this.count+'%'
		let styles = {
			li:{
			listStyleType:'none',
			flexBasis:width,
			textAlign:'center',
			height:'100%',
			width:'100%',
			position:'relative',
			},
			img:{
				height:'100%',
				width:'100%',
			},


		}

		return (
			<li style={styles.li}>
				<img style={styles.img} src={item.src} alt={item.alt}/>
				
			</li>
			);

	}
}


module.exports = SlideItem;