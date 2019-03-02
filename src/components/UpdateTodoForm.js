import React, { Component } from 'react';

class UpdateTodoForm extends Component {
  state = {
    todo: {
      _id: this.props.todo._id,
      body: this.props.todo.body
    }
  }

  onChange = (event) => {
    this.setState({
      todo: {
        _id: this.props.todo._id,
        body: event.target.value
      }
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    let todo = this.state.todo;

    debugger;
    this.props.updateTodo(todo, todo.body, todo._id);
    this.setState({ todo: "" });
  }

  render() {
    return (
      <div>
        <div className="updateTodoForm">
          <form onSubmit={ this.onSubmit }>
            <input 
              type="text"
              onChange={ this.onChange }
              placeholder="update this todo here"
              value={(this.state && this.state.todo.body) || ''} />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateTodoForm;
