import { put } from 'redux-saga/effects';
import { IAddTodoAction, TODO_CREATED, ITodoCreatedAction } from '../actions';
import { TodoService } from '../services';
import { ITodo } from '../interfaces/ITodo';

async function createTodo(todo: ITodo): Promise<ITodo> {
	let todoService = new TodoService();
	return todoService.createTodo(todo);
}

export default function* createTodoAction(action: IAddTodoAction) {
	try {
		const result = yield createTodo({ id: 0, text: action.payload.text, done: false });
		if (result) {
			yield put({ type: TODO_CREATED, payload: { todo: result } } as ITodoCreatedAction);
		}
	} catch (e) {}
}
