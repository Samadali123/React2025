import React, { Component } from "react";

class MyComponent extends Component {
    
  componentDidMount() {
    console.log("Component Mounted!");
  }

  componentDidUpdate(){
    console.log("Component Updated!");
  }

  componentWillUnmount(){
    console.log("Component Unmounted!");

  }
  render() {
    return <h2>Hello, Component Lifecycle!</h2>;
  }
}

export default MyComponent;
