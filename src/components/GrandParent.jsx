import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
  return (
    <div>
        <Parent message="Hello from Grandparent to Child !" />;
    </div>
  )
}

export default GrandParent