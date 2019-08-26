import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { IState } from '../interfaces/IState';
import { bindActionCreators, Dispatch } from 'redux';
import { getVisibleTodos } from '../selectors/getTodos'

const mapStateToProps = (state: IState) => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ toggleTodo }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
