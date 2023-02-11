import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : props.message
      }
    }
  render() {
    return <button onClick={()=>this.handleClick()}>{this.state.message}</button>;
  }
  handleClick(){
    this.setState({
        message: "Button Clicked"
    })
  }
}

export default Button