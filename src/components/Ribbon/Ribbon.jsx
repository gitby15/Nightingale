import React, {Component} from 'react';
import styles from './Ribbon.css';
import RibbonItem from './RibbonItem.jsx';


import img1 from './img/ribbono.png';
import img2 from './img/ribbonb.png';
import img3 from './img/ribbong.png';


class Ribbon extends Component{

	render(){
		return(
			<div className={styles.container}>
				<RibbonItem img={img1} text={'Email'}/>
				<RibbonItem img={img2} text={'Fork'}/>
				<RibbonItem img={img3} text={'Star'}/>
			</div>
			)
	}
}

module.exports = Ribbon;