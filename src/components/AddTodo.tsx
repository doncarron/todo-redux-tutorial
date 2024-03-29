import React from 'react'

const AddTodo = ({ onClick }: {onClick: (input: string) => void}) => {
    let input: HTMLInputElement | null
  
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input!.value.trim()) {
            return
          }
          onClick(input!.value)
          input!.value = ''
        }}>
          <input ref={node => input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }

export default AddTodo