import React from 'react'
import Greeting from './components/Greeting'
import Greeting2 from './components/Greeting2'
import StyledComponent from './components/StyledComponent';
import Counter from './components/Counter';
import Props from './components/Props';
import Profile from './components/Profile';
import UserList from './components/Userlist';
import FilteredList from './components/FilteredList';
import UserStatus from './components/UserStatus';


const App = () => {
  // Jsx insert html into JavaScript
  const element = <h1>Hello,Developers ! </h1>;
  const users = ["Samad", "Ali", "John"];
  const items = ["Apple", "Banana", "Cherry"];
  return (
    <>
      <Greeting/>
      <Greeting2/>
      {element}
      <StyledComponent/>
      <h4 className='text-center'>bye</h4>
      <Counter/>
      <Props  name="Xyz"/>
      <Profile username="Samad" age={22} />
      <UserList users ={users} />
      <FilteredList items={items}/>
      <UserStatus  isLoggedIn={true}/>
      </> 
  )
}

export default App