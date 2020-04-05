import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import TodoList from "./TodoList.js"
import AddTodo from "./AddTodo.js"

function App() {
  return (
    <div className="App">
      <TodoList/>
      <div className="Calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
        />
      </div>
    </div>
  );
}

export default App;
