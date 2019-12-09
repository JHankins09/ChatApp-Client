import React from 'react'

const onlineUsers = []
// <ul>
//   {users.map((user, i) => <li key={i}>{user}</li>)}
// </ul>

const TextContainer = (users) => {
  onlineUsers.push(users)
  return (
    <div className='textContainer'>
      <h1>Who's online?</h1>
      {console.log('Users', onlineUsers)}
    </div>
  )
}


export default TextContainer
