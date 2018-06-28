import React, {Component} from 'react';

export default class Color extends Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler() {
		this.props.onColorClick(this.props.color);
	}
	
	render() {
		return (
			<li style={{backgroundColor: this.props.color}} onClick={this.clickHandler} className={this.props.isActiveColor ? 'active' : '' }></li>
		)
	}
}