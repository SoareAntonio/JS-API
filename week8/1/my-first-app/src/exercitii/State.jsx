import React, { useState } from 'react'

// 1. State simplu - boolean
export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    setIsLiked(!isLiked) // Schimbă state-ul
  }

  return (
    <button onClick={handleClick}>{isLiked ? '❤️ Liked' : '🤍 Like'}</button>
  )
}

// 2. State numeric - counter
export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

// 3. State string - input text
export function TextInput() {
  const [text, setText] = useState('')

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  )
}

// 4. State complex - obiect
export function UserProfile3() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0,
  })

  const updateName = (newName) => {
    setUser({
      ...user, // Păstrează celelalte proprietăți
      name: newName, // Actualizează doar name
    })
  }

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="Name"
      />
      <p>Hello, {user.name}!</p>
    </div>
  )
}