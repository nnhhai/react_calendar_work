import React from 'react';

const todo = (props) => (
    <div className="todo">
        <div className="backdrop"></div>
        <div className="content">
            <h4 className="title">
                TASK DESCRIPTION
            </h4>
          <div className="Todo card-body">
            <div className="Todo-title card-title">
              {this.props.title}
            </div>
            <div className="Todo-description card-text">
              {this.props.description}
            </div>
            <div className="Todo-date card-date">
              {this.props.date}
            </div>
          </div>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </div>
)

export default todo;
