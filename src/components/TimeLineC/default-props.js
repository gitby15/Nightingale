let defaultProps = {
		//velocity = 0.12px/ms
		//velocity:0.15,
		lineVelocity:0.2,

		pointWidth:2,
		pointRadius:6,
		pointColor:'pink',
		pointFill:'#fff',
		pointDuration:700,
	//	pointDashArray:
		


		// panelMinWidth:250,
		// panelMinHeight:100,
		// panelBorderWidth:1,
		 panelMargin:10,

		lineColor:'blue',
		lineStrokeWidth:2,
		lineWidth:2,

		
		showComponent:false
	}


defaultProps.pointDashArray = defaultProps.pointRadius*2*Math.PI;

export default defaultProps;