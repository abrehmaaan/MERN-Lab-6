import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      previousValue: '',
      currentValue: '',
      operator: ''
    };
  }

  handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          previousValue: this.state.input,
          input: '',
          operator: value
        });
        break;
      case '=':
        this.setState({
          input: eval(this.state.previousValue + this.state.operator + this.state.input),
          previousValue: '',
          operator: ''
        });
        break;
      case 'AC':
        this.setState({
          input: '',
          previousValue: '',
          operator: ''
        });
        break;
      default:
        this.setState({
          input: this.state.input + value
        });
        break;
    }
  }

  render() {
    return (
      <div className="calculator">
        <input type="text" value={this.state.input} />
        <br></br>
        <button value="7" onClick={this.handleClick}>7</button>
        <button value="8" onClick={this.handleClick}>8</button>
        <button value="9" onClick={this.handleClick}>9</button>
        <button value="+" onClick={this.handleClick}>+</button>
        <br></br>
        <button value="4" onClick={this.handleClick}>4</button>
        <button value="5" onClick={this.handleClick}>5</button>
        <button value="6" onClick={this.handleClick}>6</button>
        <button value="-" onClick={this.handleClick}>-</button>
        <br></br>
        <button value="1" onClick={this.handleClick}>1</button>
        <button value="2" onClick={this.handleClick}>2</button>
        <button value="3" onClick={this.handleClick}>3</button>
        <button value="*" onClick={this.handleClick}>*</button>
        <br></br>
        <button value="0" onClick={this.handleClick}>0</button>
        <button value="." onClick={this.handleClick}>.</button>
        <button value="=" onClick={this.handleClick}>=</button>
        <button value="/" onClick={this.handleClick}>/</button>
        <br></br>
        <button value="AC" onClick={this.handleClick}>AC</button>
        </div>
    );
  }
}

export default Calculator;
