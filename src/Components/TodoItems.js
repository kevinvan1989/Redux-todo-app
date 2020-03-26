import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoItems extends Component {
  render() {
    const {id, name, done} = this.props.todo;
    const {toggleDone} = this.props

    console.log('item', this.props)
    return (
      <div className="todo-item">
        <p>{name}</p>
        <button type="button" className="btn-picto" onClick={() => toggleDone(id)}>
            <i aria-hidden="true" className="material-icons">
              {done ? "check_box" : "check_box_outline_blank"}
            </i>
          </button>        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDone: id => dispatch({type: "TOGGLE_TODO", payload: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);