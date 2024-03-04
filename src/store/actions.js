import {
    SET_TODO_INPUT,
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    TOGGLE_ALL_TODO,
    SWITCHFILTER,
    CLEAR_ALL_TODO,
    START_EDIT_TODO,
    SET_EDIT_TODO_INPUT,
    END_EDIT_TODO,
    CANCEL_EDIT_TODO,
} from './constants';

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const toggleTodo = (payload) => ({
    type: TOGGLE_TODO,
    payload,
});
export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
});
export const toggleAllTodo = () => ({
    type: TOGGLE_ALL_TODO,
});
export const switchFilter = (payload) => ({
    type: SWITCHFILTER,
    payload,
});
export const clearAllTodo = () => ({
    type: CLEAR_ALL_TODO,
});
export const startEditTodo = (payload) => ({
    type: START_EDIT_TODO,
    payload,
});
export const setEditTodoInput = (payload) => ({
    type: SET_EDIT_TODO_INPUT,
    payload,
});
export const endEditTodo = (index, title) => ({
    type: END_EDIT_TODO,
    payload: { index, title },
});
export const cancelEditTodo = (payload) => ({
    type: CANCEL_EDIT_TODO,
    payload,
});
