import React from 'react'

const LoadButton = ({ onClick }: {onClick: () => void}) => {
    return (
      <div>
          <button type="submit" onClick={() => onClick()}>
              Load Todos
          </button>
      </div>
    )
  }

export default LoadButton