import { takeLatest } from 'redux-saga/effects';
import { TODOS_REQUESTED, ADD_TODO } from '../actions';
import fetchTodosAction from './fetchTodos';
import createTodoAction from './createTodo';

export function* rootSaga() {
    yield takeLatest(ADD_TODO, createTodoAction);
	yield takeLatest(TODOS_REQUESTED, fetchTodosAction);
}