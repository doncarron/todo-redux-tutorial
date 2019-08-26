import React from 'react'
import Todo from './Todo'
import { ITodo } from '../interfaces/ITodo';

const TodoList = ({ todos, toggleTodo }: {todos: ITodo[], toggleTodo: (id: number) => void}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
