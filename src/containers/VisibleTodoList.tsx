import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { IState } from '../interfaces/IState';
import { Dispatch } from 'redux';
import { getVisibleTodos } from '../selectors/getTodos'

const mapStateToProps = (state: IState) => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
