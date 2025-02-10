import React from 'react'

const Profile = ({username, age}) => {
  return (
    <div>
      <h2>Name: {username}</h2>
      <p>Age: {age}</p>
    </div>
  )
}

export default Profile