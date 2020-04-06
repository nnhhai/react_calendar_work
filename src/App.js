import React, { Component } from "react";
import "./App.css";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import AddTodo from "./AddTodo.js";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ChangeStateModal from "./ChangeStateModal";
import Todo from "./Todo";

import TodoComplete from "./TodoComplete.js";
import TodoIncomplete from "./TodoIncomplete.js";
import ReactModal from "react-modal";

import "./Modal.css";

var arrListYes = [];
var arrAddedWork = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        {
          title: "ITSS",
          description: "create react app",
          date: "2020-04-05",
          state: -1,
        },
        {
          title: "master japanese",
          description: "have N1",
          date: "2020-04-05",
          state: 1,
        },
        {
          title: "learn react basic",
          description: "learn fundamental react component",
          date: "2020-04-04",
          state: 0,
        },
      ],
      listYesterday: [],
      isModal: false,
      isCalendar: true,
      isToDoList: false,
      isAddToDo: false,
    };
    this.renderToDoList = this.renderToDoList.bind(this);
    this.renderAddToDo = this.renderAddToDo.bind(this);
    // this.handlerChangedState = this.handlerChangedState.bind(this);
  }

  componentDidMount() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    console.log(date.toISOString().split("T")[0] === "2020-04-04");
    this.state.toDoList.map((item, i) => {
      if (item.date === date.toISOString().split("T")[0] && item.state === -1)
        arrListYes.push(item);
    });
    if (arrListYes.length > 0)
      this.setState({
        // isCalendar: false,
        isModal: true,
        listYesterday: arrListYes,
      });
    console.log(this.state);
  }

  handlerChangedState = (array) => {
    console.log("===", array);
    let arr3 = this.state.toDoList.map((item, i) =>
      Object.assign({}, item, array[i])
    );
    this.setState({ isCalendar: true, toDoList: arr3, isModal: false });
  };

  renderToDoList() {
    this.setState({
      // isCalendar: false,
      isToDoList: true,
    });
    // console.log(this.state.isCalendar);
  }

  renderCalendar = () => {
    this.setState({
      // isCalendar: true,
      isToDoList: false,
    });
    // console.log(this.state.isCalendar);
  };

  deleteTodo = (index) => {
    let newlist = this.state.toDoList;
    var deleted = newlist.splice(index, 1);
    console.log(newlist);
    this.setState({ toDoList: newlist });
  };

  renderAddToDo() {
    this.setState({
      // isCalendar: false,
      isToDoList: false,
      isAddToDo: true,
    });
    console.log(this.state);
  }

  handlerAddItemToList = (item) => {
    console.log(item);
    arrAddedWork.push(item);
    this.setState({
      toDoList: arrAddedWork,
      isAddToDo: false,
      // isCalendar: true,
    });
  };

  render() {

    return (

      <div className="App">
        <Container>
          <Row className="Calendar justify-content-md-center">
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              header={{
                left: "prev,next today ",
                center: "title ",
                right: "dayGridMonth",
              }}
              events={this.state.toDoList}
              eventClick={function (info) {
                alert(
                  "Event: " +
                    info.event.title +
                    "\n" +
                    "Time: " +
                    info.event.start
                );
              }}
            />
            <Button variant="primary" onClick={this.renderToDoList}>List of Works</Button>
            <Button variant="primary" onClick={this.renderAddToDo}>Add Work</Button>
          </Row>
        <ReactModal
          isOpen={this.state.isToDoList}
          className="todoList"
          overlayClassName="overlay"
        >
            <Row className="ListItem justify-content-md-center" > 
                <Col sm={12} className="title">
                  <h1>To Do List</h1>
                </Col>
                <TodoComplete
                  list={this.state.toDoList}
                  delete={this.deleteTodo}
                />
                <TodoIncomplete
                  list={this.state.toDoList}
                  delete={this.deleteTodo}
                />
                <Col sm={1}></Col>

                <Button variant="primary" onClick={this.renderAddToDo}>
                  Create new Work
                </Button>
                <Button className="justify-content-md-center" variant="primary" onClick={this.renderCalendar}>
                  Back to Calendar
                </Button>

            </Row>

        </ReactModal>

        <ReactModal
          isOpen={this.state.isAddToDo}
          className="addTodo"
          overlayClassName="addTodo_overlay"
          shouldCloseOnOverlayClick={true}
        >
          <div className="addTodo-content">
            <span
              class="close"
              onClick={() =>
                this.setState({ isToDoList: false, isAddToDo: false })
              }
            >
              &times;
            </span>
            <AddTodo addItem={this.handlerAddItemToList} />
          </div>
        </ReactModal>
        <ChangeStateModal
          content={{
            className: "change-state-modal",
            title: "Check your work yesterday",
            message: "You completed your work?",
          }}
          toDoList={this.state.listYesterday}
          modalIsOpen={this.state.isModal}
          handlerChangedState={this.handlerChangedState}
        />
        </Container> 
      </div>
      

    );
  }
}

export default App;
