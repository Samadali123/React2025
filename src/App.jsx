import React from 'react'
import Greeting from './components/Greeting'
import Greeting2 from './components/Greeting2'
import StyledComponent from './components/StyledComponent';


const App = () => {
  // Jsx insert html into JavaScript
  const element = <h1>Hello,Developers ! </h1>;

  return (
    <>
      <Greeting/>
      <Greeting2/>
      {element}
      <StyledComponent/>
      <h4 className='text-center'>bye</h4>
      </>
  )
}

export default App