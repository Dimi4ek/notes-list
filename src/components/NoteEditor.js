import React, {Component} from 'react';
import Color from './Color';

export default class NoteEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			color: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.setColor = this.setColor.bind(this);
	}
	componentDidMount() {
		this.setState({color: this.props.pallete[0]})
	}
	handleChange(event) {
		this.setState({value: event.target.value})
	}
	handleSubmit() {
		if(this.state.value === "") return;

		var newNote = {
			id: Date.now(),
			text: this.state.value,
			color: this.state.color
		}

		this.props.onAdd(newNote);
		this.setState({value: ''});
	}
	setColor(color) {
		this.setState({color: color});
	}
	render() {
		return (
			<div className="editor">
				<h1>Note Editor</h1>
				<textarea value={this.state.value} onChange={this.handleChange} className="textarea" style={{backgroundColor: this.state.color}}/>
				<button onClick={this.handleSubmit}>ADD</button>
				<ul className="pallete">
					{this.props.pallete.map((color) => <Color 
						color={color} 
						key={Math.round(Math.random() * 10000)}
						isActiveColor={color === this.state.color ? true : false}
						onColorClick={this.setColor}
					/> )}
				</ul>
			</div>
		)
	}
}