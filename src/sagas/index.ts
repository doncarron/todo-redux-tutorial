import { takeLatest } from 'redux-saga/effects';
import { TODOS_REQUESTED } from '../actions';
import fetchTodosAction from './fetchTodos';

export function* rootSaga() {
	yield takeLatest(TODOS_REQUESTED, fetchTodosAction);
}