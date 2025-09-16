import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/todoSclice';

function TodoForm() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');


    const addTodoHandel = (e) => {
        e.preventDefault();
        if (!input) return;

        dispatch(addTodo(input));
        setInput('');

    }

    return (
        <div>
            <form
                onSubmit={addTodoHandel}
                className='flex'>
                <input
                    type='text'
                    placeholder='Enter Your Todos......'
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button
                    type='submit'
                    className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
                >ADD</button>

            </form>
        </div>
    )
}

export default TodoForm