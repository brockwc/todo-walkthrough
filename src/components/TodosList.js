import React, { Component } from 'react';
import Todo from './Todo';

class TodosList extends Component {
  render() {
    let todos = this.props.todos.map((todo) => {
      return (
        <Todo 
          key={ todo._id } 
          todo={ todo }
          deleteTodo={ this.props.deleteTodo }
          updateTodo={ this.props.updateTodo } />
      )
    })

    return (
      <ul>
        { todos }
      </ul>
    );
  }
}

export default TodosList;
