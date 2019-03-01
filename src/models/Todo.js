import axios from 'axios';

const endPoint = `https://super-crud-api.herokuapp.com/api/todos`;

class TodoModel {
  static all() {
    let request = axios.get(endPoint);
    return request
  }
}

export default TodoModel;