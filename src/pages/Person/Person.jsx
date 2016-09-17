import React, {Component} from 'react';
import Radium, {Style} from 'radium';
import styles from './Person.css';

import Banner from '../../layouts/Banner';
import FloatPage from '../../layouts/FloatPage';
import RaceGame from '../../components/RaceGame';
import TimeLine from '../../components/TimeLineC';



class Person extends Component{



	render(){
		return(
			<FloatPage>
				<Banner />
				<TimeLine className={styles.timeline}>
					<TimeLine.Item key={'item-1'}>
						<div>2011</div>
						<div>进入大学</div>
						<div>东华大学 | 通信工程</div>
					</TimeLine.Item>
					<TimeLine.Item key={'item-2'}>
						<div>2013</div>
						<div>开始实习</div>
						<div>诸君科技有限公司 | PHP</div>
						
					</TimeLine.Item>
					<TimeLine.Item key={'item-3'}>
						<div>2014</div>
						<div>参加竞赛</div>
						<div>英特尔杯嵌入式邀请赛 | 项目负责人</div>
						<div>全国三等奖 +　优秀毕业论文</div>
					</TimeLine.Item>
					<TimeLine.Item key={'item-4'}>
						<div>2015</div>
						<div>继续实习</div>
						<div>柯达亚洲研发中心 | 前端</div>
					</TimeLine.Item>
					<TimeLine.Item key={'item-5'}>
						<div>2015-Now</div>
						<div>工作</div>
						<div>柯达亚洲研发中心 | 软件工程师</div>
						<div>维护公司产品，使用敏捷开发</div>
					</TimeLine.Item>
				</TimeLine>
			</FloatPage>
			
			);
	}
}

module.exports = Person;