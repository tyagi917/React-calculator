import React from "react";

class CalcDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="display">
				<p>{this.props.disp}</p>
			</div>
		);
	}
}

export default CalcDisplay;