import React, { Component } from "react";

export class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      number2: 10,
    };
  }

  increaseNumber(incrementer) {
    this.setState((prevState) => {
      console.log(prevState); // this.state
      return {
        number: prevState.number + incrementer
      };
    });
    this.setState((prevState) => {
      console.log(prevState); // this.state
      return {
        number: prevState.number + incrementer
      };
    });
  }

  decreaseNumber(decrementer) {
    this.setState({
      number: this.state.number - decrementer
    });
  }

  increaseNumber2() {
    this.setState({
      number2: this.state.number2 + 5
    });
  }

  render() {
    console.log("render");
    return (
      <div>
        ClassComp
        <button onClick={() => this.increaseNumber(2)}>Inc</button>
        <button onClick={() => this.increaseNumber2()}>Inc2</button>
        <button
          disabled={this.state.number <= 0}
          onClick={() => this.decreaseNumber(1)}
        >
          Dec
        </button>
        <h3>{this.state.number}</h3>
        <h3>{this.state.number2}</h3>
      </div>
    );
  }
}

export default ClassComp;
