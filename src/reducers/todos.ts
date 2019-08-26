import { ITodo } from "../interfaces/ITodo";
import { TODOS_RECEIVED, TOGGLE_TODO, TODO_CREATED } from "../actions";

const todos = (state: ITodo[] = [], action: any) => {
  switch (action.type) {
    case TODO_CREATED:
      return [
        ...state,
        action.payload.todo
      ]
    case TODOS_RECEIVED: 
      return [...action.payload.todos]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? {...todo, done: !todo.done}
          : todo
      )
    default:
      return state
  }
}

export default todos
