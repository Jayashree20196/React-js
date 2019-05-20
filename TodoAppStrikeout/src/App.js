import React, { Component } from 'react';
import Header from './Components/layout/Header'
import './App.css';
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [{
      id: uuid.v4(),
      value: 'test',
      completed: false
    }]
  }
  //Toggle complete function
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //delete item
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] })
  }

  editTodo = (id, value) => {
    this.deleteTodo(id);
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      value: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <div className="App" >
        <div className="container">
          <Header>Header</Header>
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} editTodo={this.editTodo}></Todos>
        </div>
      </div>
    );
  }
}

export default App;
