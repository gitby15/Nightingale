import React, {Component} from 'react';
import styles from './RaceGame.css';
import runnerPic from './img/runner.jpg';
class RaceGame extends Component{


	constructor(props){
		super(props);
		this.state = {
			runner1:{
				progress:0
			},
			runner2:{
				progress:0
			},
			runner3:{
				progress:0
			}
		}
	}
	reset(){
		this.setState({
			runner1:{
				progress:0
			},
			runner2:{
				progress:0
			},
			runner3:{
				progress:0
			}
		})
	}

	start(){
		

		let race = setInterval(() => {
				
				let p1 = this.state.runner1.progress;
				let p2 = this.state.runner2.progress;
				let p3 = this.state.runner3.progress;
				if(p1<100&&p2<100&&p3<100){
						p1+= Math.random()*5;
						p2+= Math.random()*5;
						p3+= Math.random()*5;
						
						this.setState({
							runner1:{
								progress:p1
							},
							runner2:{
								progress:p2
							},
							runner3:{
								progress:p3
							}
						});

				}else{
					clearInterval(race);
				}
		       
		      }, 100);




		

		
	}

	render(){
		let p1 = this.state.runner1.progress;
		let p2 = this.state.runner2.progress;
		let p3 = this.state.runner3.progress;		
									
		let inlineStyles = {
			runner1:{
				left:(p1<100?p1:100)+'%',
				display:'block'
			},
			runner2:{
				left:(p2<100?p2:100)+'%'
			},
			runner3:{
				left:(p3<100?p3:100)+'%'
			}
		};	
		return(
			<div>
				<div className={styles.container} >
					<button className={styles.startBtn} onClick={this.start.bind(this)}>Start</button>
					<button className={styles.resetBtn} onClick={this.reset.bind(this)}>Reset</button>
					<div className={styles.world}>
						
						<div className={styles.tracks}>

							<div className={styles.track}>
								<div className={styles.runner} ref='runner1' style={inlineStyles.runner1}>
									<img src={runnerPic}/>
								</div>
							</div>
							<div className={styles.track}>
								<div className={styles.runner} ref='runner2' style={inlineStyles.runner2}>
									<img src={runnerPic}/>
								</div>
							</div>
							<div className={styles.track}>
								<div className={styles.runner} ref='runner3' style={inlineStyles.runner3}>
									<img src={runnerPic}/>
								</div>
							</div>

						
						<div className={styles.backtrack}></div>
						</div>
						
						
					</div>
				</div>
			</div>

			)
	}

}

module.exports = RaceGame;