import React from 'react'
import { useSelector } from 'react-redux';
import TodoListItems from './TodoListItems';

function TodoList() {

    const todos = useSelector(state => state.todos)


    return (
        <div>
            <h3
                className='text-2xl font-medium text-white flex justify-center items-center text-center my-3'
            >Todos</h3>
            {todos.map((todo) => (
                <TodoListItems todo={todo} key={todo.id} />
            ))
            }
        </div >
    )
}

export default TodoList