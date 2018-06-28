import React, {Component} from 'react';
import Filter from './Filter';

export default class NoteFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: []
		}

		this.onEnableFilter = this.onEnableFilter.bind(this);
	}
	// componentWillReceiveProps(next) {
		// var filters = this.state.filters.slice();

		// let existColor = function(pallet, color) {
		// 	return pallet.find((el) => {
		// 		return el.color === color;
		// 	})
		// }

		// if(existColor(filters, next.colors[0]) === undefined) {
		// 	filters.unshift({color: next.colors[0], enabled: false});
		// 	this.setState({
		// 		filters
		// 	});
		// }
	// }
	// onChangeHandler(event) {
	// 	const value = event.target.value;

	// 	const newFilters = this.state.filters.map((filter) => {
	// 		if(value === filter.color) {
	// 				filter.enabled = !filter.enabled;
	// 		}
	// 		return filter;
	// 	})
	// 	this.setState({
	// 		filters: newFilters
	// 	});
	// 	// this.props.filterNotes(value);
	// }
	onEnableFilter(data) {

		this.props.filterNotes(data);

	}
	render() {
		return (
			<div className="noteFilter">
				<h3>Filter</h3>
				{this.props.colors.map((color) =>
					<Filter value={color} key={color} onCheckedHandler={this.onEnableFilter}/>
				)}
			</div>
		)
	}
	// render() {
	// 	return (
	// 		<div className="noteFilter">
	// 			<h3>Filter</h3>
	// 			{this.state.filters.map(({color, enabled}) =>
	// 				<label key={Math.round(Math.random() * 10000)}>
	// 					<input type="checkbox" onChange={this.onChangeHandler} value={color} checked={enabled}/>
	// 					{color}
	// 				</label>
	// 			)}
	// 		</div>
	// 	)
	// }
}