import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

/* Import React-Bootstrap Components*/
import {Grid, Row, Col} from 'react-bootstrap';



import TextWidget from '../../../components/TextWidget';

class Banner extends Component{

	render(){
		let styles = {
			ribbonBase:{
				display:'inline-block',
				width:'50px',
				height:'50px',
			},
			
			container:{
				display:'flex',
				paddingBottom:'50px',
				paddingTop:'50px',
				position:'relative',

				'@media (max-width:768px)':{
					flexDirection:'column',
					
				},
				'@media (min-width:768px)':{
					
					flexDirection:'row',
					
				},
				
			},
			bannerBase:{
				
			},

			ribbonContainer:{
				flexGrow:'1',
				position:'absolute',
				top:'0px',


				'@media (max-width:480px)':{
					left:'50px',


				},
				'@media (min-width:480px) and (max-width:768px)':{
					right:'50px',

				},
				'@media (min-width:768px)':{
					right:'50px',
				},

			},
			name:{
				flexGrow:'1',
				height:'50px',
				'@media (max-width:480px)':{
					marginTop:'30px',


				},
				'@media (min-width:480px) and (max-width:768px)':{
					

				},
				'@media (min-width:768px)':{
					
					
				},
			},
			githubLink:{
				flexGrow:'1',
				'@media (max-width:480px)':{
					marginTop:'30px',


				},
				'@media (min-width:480px) and (max-width:768px)':{
					

				},
				'@media (min-width:768px)':{
					
					
				},
			}
			//
		}

		return(
			
			<Row style={styles.border}>
				<StyleRoot>
					<article style={[styles.container,styles.border]}>
						<div style={[{border:'solid green 1px'},styles.ribbonContainer]}>
							<div style={[{border:'solid red 1px'},styles.ribbonBase]}></div>
							<div style={[{border:'solid red 1px'},styles.ribbonBase]}></div>
							<div style={[{border:'solid red 1px'},styles.ribbonBase]}></div>
						</div>
						<div style={[{border:'solid blue 1px'},styles.name]}>
							<TextWidget />
						</div>
						<div style={[{border:'solid black 1px'},styles.githubLink]}></div>
					</article>
				</StyleRoot>
			</Row>
			

			);
	}
}

module.exports = Radium(Banner);