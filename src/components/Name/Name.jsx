import React, {Component} from 'react';
import styles from './Name.css';

class Name extends Component{

	static defaultProps = {
		firstName:'Tim',
		lastName:'Li',
		title:'Software Developer',

	}

	render(){
		let {language,firstName,lastName} = this.props;
		let wordFirst,workSecond;
		if(language = "chinese"){
			wordFirst = lastName;
			workSecond = firstName;
		}else if(language = "english"){
			wordFirst = firstName;
			workSecond = lasttName;
		}

		return(
			<div className={styles.container}>
				<h1 className={styles.name}>{wordFirst+" "+workSecond}</h1>
				<div className={styles.title}>{this.props.title}</div>
			</div>
			)
	}
}

module.exports = Name;