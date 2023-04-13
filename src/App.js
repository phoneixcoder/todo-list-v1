import React from 'react'
import TodoWrapper from './Components/TodoWrapper/TodoWrapper'
import './App.css'
const App = () => {
  return (
    <div className='main'>
      <h1>TODO LIST</h1>
      <div className='todo-wrapper'>
        <TodoWrapper/>
      </div>
    </div>
  )
}

export default App
