import React, { Component } from 'react';
import './App.css';
import AddComponent from './Components/AddComponent'


class App extends Component {
  //Declaring states with values
  state = {
    passPorps: [{
      id: 1,
      value: "Passing the  1st  value as props to added component"
    },
    {
      id: 2,
      value: "Passing the second value as props to added component"
    }]
  }
  render() {
    return (
      <div className="App" >
        {/* Passing the props to the added component */}
        <AddComponent passPorps={this.state.passPorps}></AddComponent>
      </div>
    );
  }
}
//Exporting component
export default App;
