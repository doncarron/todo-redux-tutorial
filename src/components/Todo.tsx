import React from 'react'

const Todo = ({ onClick, done, text }: { onClick: () => void, done: boolean, text: string}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: done ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
