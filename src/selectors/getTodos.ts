import { IState } from "../interfaces/IState"
import { getVisibilityFilter } from './getVisibilityFilter'
import { createSelector } from 'reselect'
import { ITodo } from "../interfaces/ITodo";
import { VisibilityFilters } from "../actions";

export const getTodos = (state: IState) => state.todos

export const getVisibleTodos = createSelector(
    getTodos,
    getVisibilityFilter,
    (todos: ITodo[], filter: string) => {
        switch (filter) {
            case VisibilityFilters.SHOW_ALL:
            return todos
            case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
            case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
            default:
            throw new Error('Unknown filter: ' + filter)
        }
    })