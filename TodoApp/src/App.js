import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddFile'


class App extends Component {
  //State is made empty to set the values
  state = {
    todos: []
  }

  //delete method
  deleteTodo = (id) => {

    //call to confirm method
    let response = this.ConfirmMethod(id);
    if (response) {
      //removes the clicked id element
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        //todos:todos
        //if key and value are same, we can represent like below
        todos
      })
    } else {

    }
  }

  //add method
  addTodo = (todo) => {
    todo.id = Math.random();
    //Spread operator to  get into each individual item and emit here
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  //method to conform before delete from the list
  ConfirmMethod = () => {
    var trueFalse = window.confirm("Click Ok to delete it from the list !");
    return trueFalse;
  }

  //render option
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's List</h1>
        {/* Send the state object to todos component as props  */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;




