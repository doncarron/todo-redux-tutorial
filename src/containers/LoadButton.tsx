import React from 'react'
import { connect } from 'react-redux'
import { todosRequested } from '../actions'

const LoadButton = ({ dispatch }: {dispatch: (action: any) => void}) => {
  let input: HTMLInputElement | null

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(todosRequested())
      }}>
        <button type="submit">
          Load Todos
        </button>
      </form>
    </div>
  )
}

export default connect()(LoadButton)
