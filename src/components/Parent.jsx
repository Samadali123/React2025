import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
         <Child message={message} />;
    </div>
  )
}

export default Parent