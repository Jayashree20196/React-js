import React, { Component } from 'react';
import './App.css';
import './Components/Button.css'
import Button from './Components/Button';
import Input from './Components/Input';
import ClearButton from './Components/ClearButton';
import ShowHistory from './Components/ShowHistory';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pushValues: [],
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  //value is passed
  addToInput = val => {
    //value is added
    this.setState({ input: this.state.input + val });
  }

  addZeroToInput = val => {
    //adding zero only after numbers
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val })
    }
  };

  addDecimal = val => {
    //add decimal values
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  //clears the input value
  clearInput = () => {
    this.setState({ input: "" });
  };

  ShowHistory = () => {
    let show_values = localStorage.getItem('Calculator');
    this.setState({ input: show_values });
  }

  //add operation
  add = val => {
    //previous number is stored in memory
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    //set the operator
    this.state.operator = val;
  };
  //subtract operation
  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "-";
  }
  //multiply operation
  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "*";
  }
  //Divide operation
  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "/";
  }

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "+") {
      //calculation done
      let result = parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber);
      this.setState({
        input: result
      })
      this.state.pushValues.push(this.state.previousNumber + this.state.operator + this.state.currentNumber + "=" + result)
      localStorage.setItem("Calculator", JSON.stringify(this.state.pushValues));

    } else if (this.state.operator == "-") {
      //calculation done
      let result = parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber);
      this.setState({
        input: result
      })

      this.state.pushValues.push(this.state.previousNumber + this.state.operator + this.state.currentNumber + "=" + result)
      localStorage.setItem("Calculator", JSON.stringify(this.state.pushValues));

    } else if (this.state.operator == "*") {
      //calculation done
      let result = parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber);
      this.setState({
        input: result
      })
      this.state.pushValues.push(this.state.previousNumber + this.state.operator + this.state.currentNumber + "=" + result)
      localStorage.setItem("Calculator", JSON.stringify(this.state.pushValues));
    } else {
      //calculation done
      let result = parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber);
      this.setState({
        input: result
      })
      this.state.pushValues.push(this.state.previousNumber + this.state.operator + this.state.currentNumber + "=" + result)
      localStorage.setItem("Calculator", JSON.stringify(this.state.pushValues));
    }
  };


  // /* use of Local storage */

  // //Lifecycle method to get values from Dom (mounting-technique). DOM cannot be changed here
  // componentWillMount() {
  //   localStorage.getItem('testing') && this.setState({
  //     testing: JSON.parse(localStorage.getItem('testing')),
  //     isLoading: false
  //   })
  // };

  // //Lifecycle method to make changes into the Dom (mounting-technique)
  // componentDidMount() {
  //   if (localStorage.getItem('testing') !== "") {

  //     this.fetchData();
  //   } else {
  //     console.log("Using data from local storage");
  //   }
  // }

  // //Lifecycle method to add change to the state or props value (update-technique)
  // componentWillUpdate(nextProps, nextState) {
  //   let pushValues = [];
  //   ///pushValues.push(nextState.input);
  //   localStorage.setItem("Calculator", JSON.stringify(nextState.input));
  // }

  // //pushed values into the state
  // fetchData() {
  //   localStorage.setItem("pushValues", JSON.stringify(this.state.pushValues));
  // }

  render() {
    return (
      <div className="App">
        <div className="cal-wrapper">
          <h1 className="cal-heading">CALCULATOR</h1>
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} >4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
            <ShowHistory handleShow={this.ShowHistory}>History</ShowHistory>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
