import React, { Component } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import NoteFilter from './components/NoteFilter';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          text: "Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад",
          color: "#376ec6"
        },
        {
          id: 2,
          text: "На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні",
          color: "#7931bc"
        },
        {
          id: 3,
          text: "Існує багато варіацій уривків з Lorem Ipsum, але більшість з них зазнала певних змін на кшталт жартівливих вставок або змішування слів, які навіть не виглядають правдоподібно.",
          color: "#4cbc31"
        }
      ],
      pallete: ["#ff9e9e", "#a6fd7b", "#5a8a8b", "#e1695b", "#d68e45"],
      filter: []
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
    this.onFilterHandler = this.onFilterHandler.bind(this);
  }
  componentDidMount() {
    this.setState({
      filter: this.state.notes.map(item => item.color)
    });
  }
  onHandleSubmit(data) {
    var newNotes = this.state.notes.slice();
    var newFilters = this.state.filter.slice();
    newNotes.unshift(data);
    newFilters.unshift(data.color);
    this.setState({
      notes: newNotes,
      filter: newFilters
    });
  }
  handleNoteDelete(note) {
    var noteID = note.id;
    var newNotes = this.state.notes.filter(function(item) {
      return item.id !== noteID;
    });

    this.setState({
      notes: newNotes,
      filter: this.state.filter.filter((filter) => {
        return filter !== note.color;
      })
    });
  }

  onFilterHandler(filter) {
    let newFilters = this.state.filter.slice();
    if(newFilters.find((el) => el === filter.value) === undefined) {
      newFilters.push(filter.value)
    }
    if(filter.checked === false) {
      newFilters = this.state.filter.filter((el) => {
        return el !== filter.value;
      })
    }
    this.setState({filter: newFilters});
  }

  render() {
    return (
      <div className="App">
        <NoteEditor onAdd={this.onHandleSubmit} pallete={this.state.pallete}/>
        <div className="wrapper">
          <NoteList notes={this.state.notes} filter={this.state.filter} onNoteDelete={this.handleNoteDelete}/>
          <NoteFilter colors={this.state.notes.map(item => item.color)} filterNotes={this.onFilterHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
