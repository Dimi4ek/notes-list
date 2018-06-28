import React, {Component} from 'react';
import Note from './Note';

export default class NoteList extends Component {
	render() {
		var onNoteDelete = this.props.onNoteDelete;
		var filterColors = this.props.filter;
		return (
			<div className="note-list">
				<h1>NoteList</h1>
				{ this.props.notes.map((item) => 
					{
						if(filterColors.find((el) => item.color === el) !== undefined) {
							return <Note key={item.id} text={item.text} color={item.color} onDelete={onNoteDelete.bind(null, item)}/>
						}
					}
						
				)}
			</div>
		)
	}
}