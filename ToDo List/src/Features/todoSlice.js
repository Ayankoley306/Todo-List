import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        title: "Hello User!",
        isCompleated: false,
        createTime: new Date().toISOString(),
    }, {
        id: nanoid(),
        title: "Wake Up At 6:30 AM",
        isCompleated: false,
        createTime: new Date().toISOString(),
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                isCompleated: false,
                createTime: new Date().toISOString(),
            }
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo));
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, isCompleated: !todo.isCompleated } : todo));
        }
    }
})


export const { addTodo, deleteTodo, editTodo, completeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;