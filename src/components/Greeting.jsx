// import React, { Component } from "react";

// class Greeting extends Component {
//   render() {
//     return <h1>Hello, Syed!</h1>;
//   }
// }

// export default Greeting;



import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-blue-400">Hello, Syed!</h1>
      </div>
    );
  }
}

export default Greeting;
