import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '../Features/todoSclice';

export const store = configureStore({
    reducer: todoReducer,
});