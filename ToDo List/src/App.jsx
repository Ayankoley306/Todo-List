import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList/TodoList'

function App() {

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-white flex justify-center items-center text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm />
        </div>
      </div>
      <div
        className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white"
      >
        <TodoList />
      </div>

    </div>
  )
}

export default App
