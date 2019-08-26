import { fetch } from '@mitchell/typescript.service.fetch';
import { ITodo } from '../interfaces/ITodo';

export class TodoService {
    private readonly serviceUrl: string = 'http://172.20.61.39:5050/'
    private readonly fetchWrapper: (url: string | Request, init?: RequestInit | undefined) => Promise<Response>;
    
    // Don - In the event fetch is not provided the default fetch implementation which we created is used.
	// Except in testing situations this default will always be used (since no DI framework exists to resolve this)
	// so it's inpractical to write a test for a condition designed for testing.
	/* istanbul ignore next */
	constructor(fetchWrapper: (url: string | Request, init?: RequestInit | undefined) => Promise<Response> = fetch) {
		this.fetchWrapper = fetchWrapper;
    }
    
    public async getTodos(): Promise<ITodo[]> {
        let requestInit: RequestInit = {
            headers: { 'Content-Type': 'application/json' },   
        }

        return this.fetchWrapper(this.serviceUrl + 'query?query={todos{id,text}}', requestInit)
            .then(response => response.json())
            .then(response => response.data.todos as ITodo[])
    }

    public async createTodo(todo: ITodo): Promise<ITodo> {
        let body = {
            operationName: null,
            variables: {},
            query: 'mutation { createTodo(input: { userId: "' + todo.id + '", text: "' + todo.text + '" }) { id text done } }'
        }
        
        let requestInit: RequestInit = {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            method: 'POST'
        }

        return this.fetchWrapper(this.serviceUrl + 'query', requestInit)
            .then(response => response.json())
            .then(response => {
                return response.data.createTodo
            })
    }
}