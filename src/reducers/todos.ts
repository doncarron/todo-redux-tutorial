import { ITodo } from "../interfaces/ITodo";
import { TODOS_RECEIVED, ADD_TODO, TOGGLE_TODO } from "../actions";

const todos = (state: ITodo[] = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case TODOS_RECEIVED: 
      return [...action.payload.todos]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
