import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Dispatch } from 'redux';
import AddTodo from '../components/AddTodo';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: (input: string) => dispatch(addTodo(input))
})

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
