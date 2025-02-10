import React from 'react'

const UserStatus = ({isLoggedIn}) => {
  return (
    <>
    return <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
    </>
  )
}

export default UserStatus