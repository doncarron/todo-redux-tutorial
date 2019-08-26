import { Action } from 'redux';
import { ITodo } from '../interfaces/ITodo';

const MODULE_PREFIX = 'TODO';

export const ADD_TODO = `${MODULE_PREFIX}_ADD_TODO`;
export const SET_VISIBILITY_FILTER = `${MODULE_PREFIX}_SET_VISIBILITY_FILTER`;
export const TOGGLE_TODO = `${MODULE_PREFIX}_TOGGLE_TODO`;
export const TODOS_REQUESTED = `${MODULE_PREFIX}_TODOS_REQUESTED`;
export const TODOS_RECEIVED = `${MODULE_PREFIX}_TODOS_RECEIVED`;
export const TODO_CREATED = `${MODULE_PREFIX}_TODO_CREATED`;

export interface IBaseAction<T> extends Action<string> {
	type: string;
	payload: T;
}

export interface IAddTodoAction extends IBaseAction<{ text: string }> { }
export interface ISetVisibilityFilterAction extends IBaseAction<{ filter: string }> { }
export interface IToggleTodoAction extends IBaseAction<{ id: number }> { }
export interface ITodosRequestedAction extends IBaseAction<{}> { }
export interface ITodosReceivedAction extends IBaseAction<{ todos: ITodo[] }> { }
export interface ITodoCreatedAction extends IBaseAction<{ todo: ITodo }> { }

export const addTodo: (text: string) => IAddTodoAction = (text) => ({
  type: ADD_TODO,
  payload: {
    text
  }
})

export const setVisibilityFilter: (filter: string) => ISetVisibilityFilterAction = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
})

export const toggleTodo: (id: number) => IToggleTodoAction = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

export const todosRequested: () => ITodosRequestedAction = () => ({
  type: TODOS_REQUESTED,
  payload: {}
});


export const todosReceived: (todos: ITodo[]) => ITodosReceivedAction = todos => ({
	type: TODOS_RECEIVED,
	payload: { todos }
});

export const todoCreated: (todo: ITodo) => ITodoCreatedAction = todo => ({
	type: TODO_CREATED,
	payload: { todo }
});
