import React, { Component } from 'react';
import TodoItems from './TodoItems';



export default class TodoList extends Component {
  render() {
    const {todos} = this.props

    return (
      <div className="todo-list">
        {
          todos.map((todo, i) => {
            return <TodoItems todo={todo} key={i}/>
          })
        }
      </div>
    )
  }
}
