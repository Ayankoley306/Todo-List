import { useState } from 'react'
import { ListOfTodos, TodoForm, TodoList } from '../index'


function Home() {

    return (
        <div className=" min-h-screen   mx-1.5 my-2.5 rounded-2xl flex w-full">
            <div
                className='md:w-[18%] bg-[#172842] mx-1 rounded-2xl'
            >
                <div
                    className='flex justify-between items-center mx-3 '
                >
                    <h3
                        className='text-2xl font-semibold text-white mt-1 mb-2.5 flex justify-center items-center text-center'
                    >
                        List of Todos
                    </h3>
                    <button
                        className='flex text-white border-none hover:bg-gray-700 p-0.5 rounded-2xl'
                    >➕</button>
                </div>
                <div>
                    <ListOfTodos />
                </div>
            </div>
            <div className='w-4/5 bg-[#172842] mx-1 rounded-2xl'>
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
        </div>
    )
}

export default Home