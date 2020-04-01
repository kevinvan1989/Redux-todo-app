import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../Redux/Actions/todoActions";

class TodoItems extends Component {
  render() {
    const { id, name, done } = this.props.todo;
    const { toggleDone, deleteItem } = this.props;

    console.log("item", this.props.todo);
    return (
      <div className="todo-item">
        <p>{name}</p>
        <div>
          <button
            type="button"
            className="btn-picto"
            onClick={() => toggleDone(id, done)}
          >
            <i aria-hidden="true" className="material-icons">
              {done ? "check_box" : "check_box_outline_blank"}
            </i>
          </button>
          <button className="btn btn-danger" onClick={() => deleteItem(id)}>
            delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDone: (id, done) => dispatch(toggleTodo(id, done)),
    deleteItem: id => dispatch(deleteTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
