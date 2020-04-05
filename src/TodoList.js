import React, { Component } from 'react';
// import './ToDoListItem.css';
// import Form from 'react-bootstrap/Form'
// import TodoComplete from "./TodoComplete.js"
// import TodoUncomplete from "./TodoIncomplete.js"

// currently, this.state.list is a copy list from my preriod homework
// when intergrate, its should be replace with array of todo object, with each object defined as a component, or somethings like that.
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

	delCom = (index) =>{
		let newlist = this.state.list;
		newlist.splice(index,1);
		this.setState({list: newlist});
	}

	addCom = (todo) => {
		let newlist = this.state.list;
		newlist.push(todo)
		this.setState({list : newlist});
	}

	display = () => {
		let content = this.state.list.map( todo => (
  			<div class= "ToDoListItem">
	  		  	<h3 className="ToDoListItem-title">{todo.title}</h3>
	  		  	<p className="ToDoListItem-description">{todo.desc}</p>
  		  	</div>
  		));
  		return content;
	}

	render(){
		return (
			<div class="todoComplete">
				<h2 class="subtitle">Completed List</h2>
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
  		]}
	}

	delCom = (index) =>{
		let newlist = this.state.list;
		newlist.splice(index,1);
		this.setState({list: newlist});
	}

	addCom = (todo) => {
		let newlist = this.state.list;
		newlist.push(todo);
		this.setState({list : newlist});
	}

	display = () => {
		let content = this.state.list.map( todo => (
  			<div class= "ToDoListItem">
	  		  	<h3 className="ToDoListItem-title">{todo.title}</h3>
	  		  	<p className="ToDoListItem-description">{todo.desc}</p>
  		  	</div>
  		));
  		return content;
	}

	render(){
		return (
			<div class="todoIncomplete">
				<h2 class="subtitle">Incompleted List</h2>
				{this.display()}
			</div>
	)}
}

class TodoList extends Component {
	render(){
		return (
			<div class="ListItem">
				<div class="title">
					<h1>To Do List</h1>
				</div>
				<TodoComplete/>
				<TodoIncomplete/>
			</div>
	)}
}




export default TodoList;