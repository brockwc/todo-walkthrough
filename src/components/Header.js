import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Todo</h1>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/todos'}>Todos</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
