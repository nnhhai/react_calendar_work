import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'


class TodoIncomplete extends Component{
	constructor(props){
		super(props);
		this.state = {list : props.list}
	}

	handleDelete = (index, e) =>{
		this.props.delete(index);
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
			<Col sm={ {span: 4, offset: 2} }>
			<div class= "todoIncomplete">
				<h2 class="subtitle">Incompleted List</h2>
				{this.display()}
			</div>
			</Col>
	)}
}


export default TodoIncomplete;