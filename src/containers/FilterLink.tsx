import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { IState } from '../interfaces/IState';
import { getVisibilityFilter } from '../selectors/getVisibilityFilter'

const mapStateToProps = (state: IState, ownProps: any) => ({
  active: ownProps.filter === getVisibilityFilter(state)
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
