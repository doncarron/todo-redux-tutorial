import { ITodo } from "./ITodo";

export interface IState {
    visibilityFilter: string
    todos: ITodo[]
}