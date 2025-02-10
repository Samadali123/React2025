// import React, { Component } from "react";

// class MyComponent extends Component {
    
//   componentDidMount() {
//     console.log("Component Mounted!");
//   }

//   componentDidUpdate(){
//     console.log("Component Updated!");
//   }

//   componentWillUnmount(){
//     console.log("Component Unmounted!");

//   }
//   render() {
//     return <h2>Hello, Component Lifecycle!</h2>;
//   }
// }

// export default MyComponent;




import React, { Component } from "react";

class MyComponent extends Component {
  componentDidMount() {
    console.log("✅ Component Mounted!");
  }

  componentDidUpdate() {
    console.log("🔄 Component Updated!");
  }

  componentWillUnmount() {
    console.log("❌ Component Unmounted!");
  }

  render() {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto border border-gray-700 text-center">
        <h2 className="text-2xl font-bold text-blue-400">🚀 Component Lifecycle</h2>
        <p className="text-gray-300 mt-2">This component logs lifecycle events in the console.</p>
      </div>
    );
  }
}

export default MyComponent;
