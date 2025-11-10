import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, deleteTodo, editTodo } from '../../Features/todoSlice';

function TodoListItems({ todo }) {

    const dispatch = useDispatch();


    const [isEditable, setIsEditable] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState(todo.title);

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }





    const toggleEdit = (id) => {
        dispatch(editTodo({ id, title: newTodoTitle }));
        setIsEditable(false);
    }

    return (
        <li
            className={`flex border border-black/10 rounded-lg my-3 pt-1.5 px-3 flex-col gap-x-3 justify-between items-center shadow-sm shadow-white/50 duration-300 text-black ${todo.isCompleated ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}>
            <div className='flex w-full h-full gap-x-3'>
                <input
                    type='checkbox'
                    onChange={() => (dispatch(completeTodo({ id: todo.id })))}
                    checked={todo.isCompleated} />
                <input
                    type='text'
                    className={` wrap-anywhere border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"
                        } ${todo.isCompleated ? "line-through" : ""}`}
                    value={newTodoTitle}
                    onChange={(e) => {
                        setNewTodoTitle(e.target.value)
                    }}
                    readOnly={!isEditable} />

                <div
                    className='flex justify-between items-center gap-2'
                >
                    <button
                        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
                        onClick={() => {
                            if (todo.isCompleated) return;

                            if (isEditable) {
                                toggleEdit(todo.id);
                            } else {
                                setIsEditable((prev) => !prev);
                            }
                        }}
                        disabled={todo.isCompleated}
                    >
                        {isEditable ? "📁" : "✏️"}
                    </button>

                    <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
                        ❌
                    </button>
                </div>

            </div>
            <div className='flex text-[70%] flex-nowrap justify-end items-center m-auto h-4 text-gray-800 w-full'>
                {formatTime(todo.createTime)}
            </div>
        </li>
    )
}

export default TodoListItems