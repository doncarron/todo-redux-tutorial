import { ISetVisibilityFilterAction, SET_VISIBILITY_FILTER } from '../actions'
import { VisibilityFilters } from '../constants'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: ISetVisibilityFilterAction) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter
