import React, { Component } from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ChangeStateModal from "./ChangeStateModal";
import "./Modal.css";
var arrListYes = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        {
          title: "ITSS",
          description: "code React",
          date: "2020-04-04",
          state: -1,
        },
        {
          title: "ITSS",
          description: "code React",
          date: "2020-04-06",
          state: -1,
        },
      ],
      isModal: false,
      isCalendar: true,
    };

    // this.handlerChangedState = this.handlerChangedState.bind(this);
  }

  componentDidMount() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    console.log(date.toISOString().split("T")[0])
    this.state.toDoList.map((item, i) => {
      if (item.date === date.toISOString().split("T")[0] && item.state === -1)
        arrListYes.push(item);
    });
    if (arrListYes.length > 0)
      this.setState({ isCalendar: false, isModal: true });
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
  render() {
    return (
      <div className="App">
        {this.state.isCalendar ? (
          <div className="Calendar">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              events={this.state.toDoList}
            />
          </div>
        ) : null}
        <ChangeStateModal
          content={{
            className: "change-state-modal",
            title: "Check your work yesterday",
            message: "",
          }}
          toDoList={this.state.toDoList}
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
