import React, {Component} from 'react';

import TimeLine from '../../components/TimeLine';




class CanvasPanel extends Component{


	render(){
		return(
			<TimeLine>
					<TimeLine.Item key={'item-1'}>
						<div>123</div>
					</TimeLine.Item>
					<TimeLine.Item key={'item-2'}>
						<div>123</div>
					</TimeLine.Item>
				</TimeLine>
			);
	}
}

module.exports = CanvasPanel;