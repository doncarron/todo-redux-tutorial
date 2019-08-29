import { put, call } from 'redux-saga/effects';
import { TODOS_RECEIVED, ITodosReceivedAction, ITodosRequestedAction } from '../actions';
import { TodoService } from '../services';
import { ITodo } from '../interfaces/ITodo';

async function fetchTodos(): Promise<ITodo[]> {
	let todoService = new TodoService();
	return todoService.getTodos();
}

export default function* fetchTodosAction(action: ITodosRequestedAction) {
	try {
		const result = yield call(fetchTodos);
		if (result) {
			yield put({ type: TODOS_RECEIVED, payload: { todos: result } } as ITodosReceivedAction);
		}
	} catch (e) {}
}
