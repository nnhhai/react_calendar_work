import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddTodoForm.css"
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    startDate: new Date()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  onSubmit(event) {
    event.preventDefault();
    let newItemTitle = this.refs.itemTitle.value;
    let newItemDes = this.refs.itemDescripton.value;
    if(newItemTitle && newItemDes) {
      let item = {
        title: newItemTitle,
        description: newItemDes,
        date: this.state.startDate.toISOString().split("T")[0],
        state: -1
      }
      this.props.addItem(item);
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="ToDoItem">
        <input type="text" ref="itemTitle" class="Todo-title" placeholder="Title"/>
        <br></br>
        <textarea ref="itemDescripton" class="Todo-description" placeholder="Description"/>
        <br></br>
        <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
        <br></br>
        <button type="submit" id="buton-confirm" >Add</button> 
      </form>
    );   
  }
}

export default AddTodo;