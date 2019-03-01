import React from 'react';
import TodoModel from '../models/Todo';
import TodosList from '../components/TodosList';
import CreateTodoForm from '../components/CreateTodoForm';

class TodosContainer extends React.Component {
  state = {
    todos: []
  };

  // When TodosContainer mounts, fetch todo data
  componentDidMount() {
    this.fetchData();
  }

  // Fetch all todos from super-crud-api
  fetchData() {
    TodoModel.all().then( (res) => {
      this.setState({
        todos: res.data.todos,
        todo: ''
      })
    });
  }

  // Provide a function to delete a todo on successful response
  deleteTodo = (todo) => {
    TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter(function(todo) {
        return todo._id !== res.data._id
      });
      this.setState({ todos });
    })
  }

  // Provide a function to create new todos
  createTodo = (todo) => {
    let newTodo = {
      body: todo,
      completed: false
    }

    TodoModel.create(newTodo).then((res) => {
      let todos = this.state.todos;
      let newTodos = todos.push(res.data);
      this.setState({ newTodos });
    })
  }

  render() {
    return (
      <div className="todosContainer">
        <TodosList 
          todos={ this.state.todos } 
          deleteTodo={ this.deleteTodo }
        />
        <CreateTodoForm createTodo={ this.createTodo } />
      </div>
    )
  }
}

export default TodosContainer;