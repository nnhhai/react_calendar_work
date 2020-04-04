import React, { Component } from 'react';
// import './ToDoListItem.css';
// import Form from 'react-bootstrap/Form'
// import TodoComplete from "./TodoComplete.js"
// import TodoUncomplete from "./TodoIncomplete.js"
class TodoComplete extends Component{
	constructor(props){
		super(props);
		this.state = {list : [
	  		{
	  			title : 'finish homework',
	  			desc : 'try your best to finish all homework for next week class'
	  		},
	  		{
	  			title : 'sleep',
	  			desc : 'a growup should sleep 8 hours a day'
	  		}
  		]}
	}

	addCom = (todo) => {
		let newlist = this.state.list;
		newlist.push(todo)
		this.setState({list : newlist});
	}

	display = () => {
		let content = this.state.list.map( todo => (
  			<div class= "ToDoListItem">
	  		  	<div className="ToDoListItem-title">{todo.title}</div>
	  		  	<div className="ToDoListItem-description">{todo.desc}</div>
  		  	</div>
  		));
  		return content;
	}

	render(){
		return (
			<div class="todoComplete">
				{this.display()}
			</div>
	)}
}

class TodoIncomplete extends Component{
	constructor(props){
		super(props);
		this.state = {list : [
	  		{
	  			title : 'finish unfinished homework',
	  			desc : 'try your best to finish all homework for next week class'
	  		},
	  		{
	  			title : 'more sleep',
	  			desc : 'a growup should sleep 8 hours a day'
	  		}
  		]
  	}
	
	}

	addCom = (todo) => {
		let newlist = this.state.list;
		newlist.push(todo);
		this.setState({list : list});
	}

	display = () => {
		let content = this.state.list.map( todo => (
  			<div class= "ToDoListItem">
	  		  	<div className="ToDoListItem-title">{todo.title}</div>
	  		  	<div className="ToDoListItem-description">{todo.desc}</div>
  		  	</div>
  		));
  		return content;
	}

	render(){
		return (
			<div class="todoComplete">
				{this.display()}
			</div>
	)}
}

class TodoList extends Component {
	render(){
		return (
			<div class="todoList">
				<div class="title">
					<h1>To Do List</h1>
				</div>
				<TodoComplete/>
				<TodoIncomplete/>
			</div>
	)}
}




export default TodoList;