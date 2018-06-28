import React, { Component } from 'react';

export default class Note extends Component {

	render() {
		return (
			<div style={{backgroundColor: this.props.color}}>
				<p>{this.props.text}</p>
				<button onClick={this.props.onDelete}>Delete</button>
			</div>
		)
	}
}