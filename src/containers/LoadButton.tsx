import React from 'react'
import { connect } from 'react-redux'
import { todosRequested } from '../actions'

const LoadButton = ({ dispatch }: {dispatch: (action: any) => void}) => {
  return (
    <div>
        <button type="submit" onClick={() => dispatch(todosRequested())}>
            Load Todos
        </button>
    </div>
  )
}

export default connect()(LoadButton)
