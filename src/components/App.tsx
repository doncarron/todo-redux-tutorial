import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import LoadButton from '../containers/LoadButton'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <LoadButton />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
