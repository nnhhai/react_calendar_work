import React, { Component } from 'react';
import './ToDoListItem.css';
import Form from 'react-bootstrap/Form'

class TodoComplete extends Component {
	constructor(props){
		super(props);
		this.state = {comList : []};
	}

	function addCom(todo){
		let list = this.state.comList;
		list.push(todo)
		this.setState(comList : list);
	}

	display = () => {
		let content = this.state.todolist.map( todo => (
  			<div class= "ToDoListItem" onClick={(e) => this.deleteTodo(this.state.todolist.indexOf(todo), e)}>
	  		  	<div className="ToDoListItem-title">{todo.title}</div>
	  		  	<div className="ToDoListItem-description">{todo.desc}</div>
  		  	</div>
  		));
	}

	render(){
		return (
			{this.display}
	)}
}

export default TodoComplete;