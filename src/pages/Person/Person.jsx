import React, {Component} from 'react';
import Radium, {Style} from 'radium';


import Banner from '../../layouts/Banner';
import FloatPage from '../../layouts/FloatPage';
import RaceGame from '../../components/RaceGame';
import TimeLine from '../../components/TimeLine';



class Person extends Component{



	render(){
		return(
			<FloatPage>
				<Banner />
				<TimeLine>
					<TimeLine.Item key={'item-1'}>
						<div>123</div>
					</TimeLine.Item>
					<TimeLine.Item key={'item-2'}>
						<div>123</div>
					</TimeLine.Item>
				</TimeLine>
			</FloatPage>
			
			);
	}
}

module.exports = Person;