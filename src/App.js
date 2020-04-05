import React, { Component } from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import TodoList from "./TodoList.js";
import AddTodo from "./AddTodo.js";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ChangeStateModal from "./ChangeStateModal";
import Todo from "./Todo";
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
          date: "2020-04-04",
          state: -1,
        },
      ],
      listYesterday: [],
      isModal: false,
      isCalendar: true,
      isToDoList: false,
      isAddToDo: false,
      isTodo: true,
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
        isCalendar: false,
        isModal: true,
        listYesterday: arrListYes,
      });
  }

  handlerChangedState = (array) => {
    console.log("===", array);
    let arr3 = this.state.toDoList.map((item, i) =>
      Object.assign({}, item, array[i])
    );
    this.setState({ isCalendar: true, toDoList: arr3, isModal: false });
  };
  CloseModal() {
    this.setState({
      modal: {
        isOpen: false,
      },
    });
  }

  renderToDoList() {
    this.setState({ isCalendar: false, isToDoList: true });
    console.log(this.state.isCalendar);
  }

  renderAddToDo() {
    this.setState({
      isCalendar: false,
      isToDoList: false,
      isAddToDo: true,
    });
  }

  handlerAddItemToList = (item) => {
    console.log(item);
    arrAddedWork.push(item);
    this.setState({
      toDoList: arrAddedWork,
      isAddToDo: false,
      isCalendar: true,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isCalendar ? (
          <div>
            <button onClick={this.renderToDoList}>List of Works</button>
            <button onClick={this.renderAddToDo}>Add Work</button>
            <div className="Calendar">
              <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                header={{
                  left: "prev,next today ",
                  center: "title ",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                }}
                events={this.state.toDoList}
                eventClick={function (info) {
                  alert("Event: " + info.event.title + "\n" + "Time: " + info.event.start);

                }}
              />
            </div>
          </div>
        ) : this.state.isToDoList ? (
          <TodoList />
        ) : this.state.isAddToDo ? (
          <AddTodo addItem={this.handlerAddItemToList} />
        ) : null}
        <ChangeStateModal
          content={{
            className: "change-state-modal",
            title: "Check your work yesterday",
            message: "",
          }}
          toDoList={this.state.listYesterday}
          modalIsOpen={this.state.isModal}
          requestClose={() => {
            this.CloseModal();
          }}
          handlerChangedState={this.handlerChangedState}
        />
      </div>
    );
  }
}

export default App;
