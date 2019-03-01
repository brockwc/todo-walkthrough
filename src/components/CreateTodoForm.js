import React, { Component } from 'react';

class CreateTodoForm extends Component {
  state = {
    todo: ''
  };

  onInputChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.createTodo(todo);
    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      <div>
        <form id="taskForm" onSubmit={ this.onFormSubmit }>
          <input 
            value={ this.state.todo }
            onChange={ this.onInputChange }
            placeholder="What do you need to do?"
            type="text"
            id="newItemDescription"
          />
          <button 
            type="submit" 
            id="addTask" 
            className="btn">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default CreateTodoForm;
