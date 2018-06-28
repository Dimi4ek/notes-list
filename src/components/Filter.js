import React, {Component} from 'react';

export default class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: true,
			value: ''
		}

		this.changeHandler = this.changeHandler.bind(this);
	}
	changeHandler() {
		this.setState({
			checked: !this.state.checked
		}, ()=> {
			this.props.onCheckedHandler(this.state);
		});
	}
	componentDidMount() {
		this.setState({
			value: this.props.value
		})
	}
	render() {
		return (
			<label>
				<input type="checkbox" onChange={this.changeHandler} checked={this.state.checked} />
				{this.props.value}
			</label>
		)
	}
}