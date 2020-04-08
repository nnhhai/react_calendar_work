import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import "./Todo.css"

class Todo extends Component {
  render() {
    console.log("still happen")
    return (
      <Row className="todo">
        <div className="backdrop"></div>
        <div className="content">
          <h2 className="title">TASK DESCRIPTION</h2>
          <div className="Todo card-body">
            <div className="Todo-title card-title">
              <p>Task name: {this.props.title}</p>
            </div>
            <div className="Todo-description card-text">
              Task description: <br/>
              {this.props.description}
            </div>
            <div className="Todo-date card-date">{this.props.date}</div>
          </div>
          <Button onClick={this.props.close}>
            Close
          </Button>
        </div>
      </Row>
    )
  }
}

export default Todo;
