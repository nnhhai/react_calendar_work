import React, { Component } from 'react';


class TodoIncomplete extends Component{
	constructor(props){
		super(props);
		this.state = {list : props.list}
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
		let theList = this.state.list.filter((todo)=>{return todo.state === 0;})
		let content = theList.map( todo => (
  			<div class= "ToDoListItem">
	  		  	<h3 className="ToDoListItem-title">{todo.title}</h3>
	  		  	<span class="delete" onClick={(e) => this.handleDelete(this.state.list.indexOf(todo), e)}>X</span>
	  		  	<p className="ToDoListItem-description">{todo.description}</p>
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


export default TodoIncomplete;