// import React from 'react'
// import Greeting from './components/Greeting'
// import Greeting2 from './components/Greeting2'
// import StyledComponent from './components/StyledComponent';
// import Counter from './components/Counter';
// import Props from './components/Props';
// import Profile from './components/Profile';
// import UserList from './components/Userlist';
// import FilteredList from './components/FilteredList';
// import UserStatus from './components/UserStatus';
// import WithLoading from './components/WithLoading';
// import UserProfile from './components/UserProfile';
// import Button from './components/Button';
// import GrandParent from './components/GrandParent';
// import MyComponent from './components/Mycomponent';
// import Counter2 from './components/Counter2';
// import Timer from './components/Timer';
// import Users from './components/Users';
// import InputFocus from './components/Inputfocus';
// import ExpensiveCalculation from './components/ExpensiveCalculatation';
// import Counter3 from './components/Counter3';
// import Posts from './components/Posts';




// const App = () => {
//   // Jsx insert html into JavaScript
//   const element = <h1>Hello,Developers ! </h1>;
//   const users = ["Samad", "Ali", "John"];
//   const items = ["Apple", "Banana", "Cherry"];
//   // Wrapping the Component with HOC
// const UserProfileWithLoading = WithLoading(UserProfile);

//   return (
//     <>
//       <Greeting/>
//       <Greeting2/>
//       {element}
//       <StyledComponent/>
//       <h4 className='text-center'>bye</h4>
//       <Counter/>
//       <Props  name="Xyz"/>
//       <Profile username="Samad" age={22} />
//       <UserList users ={users} />
//       <FilteredList items={items}/>
//       <UserStatus  isLoggedIn={true}/>
//       <UserProfileWithLoading isLoading={true} name="Samad" />
//       <div className='w-full flex justify-center '>
//       <Button text="Save" onClick={() => alert("Saved!")} />
//       <Button text="Delete" onClick={() => alert("Deleted!")} />
//         <GrandParent/>
//         <MyComponent/>
//         <Counter2/>
//         <Timer/>
//         <Users/>
//         <InputFocus/>
//         <ExpensiveCalculation/>
//         <Counter3/>
//         <Posts/>
//       </div>
//       </> 
//   )
// }

// export default App





import React from "react";
import Greeting from "./components/Greeting";
import Greeting2 from "./components/Greeting2";
import StyledComponent from "./components/StyledComponent";
import Counter from "./components/Counter";
import Props from "./components/Props";
import Profile from "./components/Profile";
import UserList from "./components/Userlist";
import FilteredList from "./components/FilteredList";
import UserStatus from "./components/UserStatus";
import WithLoading from "./components/WithLoading";
import UserProfile from "./components/UserProfile";
import Button from "./components/Button";
import GrandParent from "./components/GrandParent";
import MyComponent from "./components/Mycomponent";
import Counter2 from "./components/Counter2";
import Timer from "./components/Timer";
import Users from "./components/Users";
import InputFocus from "./components/Inputfocus";
import ExpensiveCalculation from "./components/ExpensiveCalculatation";
import Counter3 from "./components/Counter3";
import Posts from "./components/Posts";
import Home from "./components/Home";

const App = () => {
  const element = (
    <h1 className="text-3xl font-bold text-center text-white">
      Hello, Developers!
    </h1>
  );

  const users = ["Samad", "Ali", "John"];
  const items = ["Apple", "Banana", "Cherry"];

  // Wrapping the Component with HOC
  const UserProfileWithLoading = WithLoading(UserProfile);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <header className="text-center my-6">
        {element}
      </header>

      {/* Components Section */}
      <section className="space-y-6">
        <Greeting />
        <Greeting2 />
        <StyledComponent />
        <Counter />
        <Props name="Xyz" />
        <Profile username="Samad" age={22} />
        <UserList users={users} />
        <FilteredList items={items} />
        <UserStatus isLoggedIn={true} />
        <UserProfileWithLoading isLoading={true} name="Samad" />
      </section>

      {/* Buttons */}
      <section className="flex justify-center space-x-4 my-6">
        <Button
          text="Save"
          onClick={() => alert("Saved!")}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md"
        />
        <Button
          text="Delete"
          onClick={() => alert("Deleted!")}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md"
        />
      </section>

      {/* Additional Components */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GrandParent />
        <MyComponent />
        <Counter2 />
        <Timer />
        <Users />
        <InputFocus />
        <ExpensiveCalculation />
        <Counter3 />
        <Posts />
      </section>
      <Home />
      {/* Footer */}
      <footer className="text-center mt-10 text-gray-400">
        <h4>© 2024 Your Company. All rights reserved.</h4>
      </footer>
    </div>
  );
};

export default App;
