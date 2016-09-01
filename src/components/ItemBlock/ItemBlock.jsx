import React,{Component} from 'react';
import Radium,{StyleRoot} from 'radium';



export default class ItemBlock extends Component{


	constructor(props){
		super(props);
		

	}

	static defaultProps = {
		name : 'ItemBlock'
	}


	onClick(event){

		//window.location.href = '#person';
	}
	

	render(){
		let {imgPath,className} = this.props;
		//console.log(this.props);
		
		

		let styles = {
			wrapper:{
				width:'100%',
				minWidth:'30px',
				paddingBottom:'100%',
				//border:'solid black 2px',

				position:'relative'

			},
			itemBase:{
				width:'100%',
				height:'100%',
				position:'absolute',
				top:'0px',
				bottom:'0px',
				left:'0px',
				right:'0px',
				//border:'solid red 2px',
				
				backgroundImage:'url('+imgPath.front+')',
				backgroundSize:'cover',
				':hover':{
					//transform:'rotate3d(1,2,3,180deg)',
					//border:'red 2px solid',
					//backgroundImage:'',
					
					backgroundImage:'url('+imgPath.back+')',
					//backgroundImage:''
					
				},
				transition:'1s',

			}
		}

		return(
			<div  className={className} >
				<div style={styles.wrapper}onClick={this.props.onClick}>
				<StyleRoot>
					<div
						style={styles.itemBase}
						onClick={this.onClick.bind(this)}
						>
						</div>
				</StyleRoot>
				</div>
			</div>
			
			)
	}
}



// module.exports = Radium({
// 	plugins:[Radium.Plugins.keyframes,]
// })(ItemBlock);
module.exports = Radium(ItemBlock);