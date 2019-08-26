import { connect } from 'react-redux'
import { todosRequested } from '../actions'
import { Dispatch } from 'redux';
import LoadButton from '../components/LoadButton';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClick: () => dispatch(todosRequested())
})

export default connect(
    null, 
    mapDispatchToProps
)(LoadButton)
