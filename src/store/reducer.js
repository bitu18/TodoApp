import {
    SET_TODO_INPUT,
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    TOGGLE_ALL_TODO,
    SWITCHFILTER,
    CLEAR_ALL_TODO,
    START_EDIT_TODO,
    END_EDIT_TODO,
    SET_EDIT_TODO_INPUT,
    CANCEL_EDIT_TODO,
} from './constants';

const initialState = JSON.parse(localStorage.getItem('TODOS')) ?? {
    todoInput: '',
    todos: [],
    filter: 'all',
    isEditIndex: null,
    editValueInput: '',
    /* filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed,
    }, */
};

//reducer
const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_TODO_INPUT:
            newState = {
                ...state,
                todoInput: action.payload,
            };
            break;
        case ADD_TODO:
            newState = {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                        completed: false,
                    },
                ],
            };
            break;
        case TOGGLE_TODO:
            const newTodos = [...state.todos];
            const updateTodos = { ...newTodos[action.payload], completed: !newTodos[action.payload].completed };
            newTodos[action.payload] = updateTodos;
            newState = {
                ...state,
                todos: newTodos,
            };
            break;
        case TOGGLE_ALL_TODO:
            const completed = state.todos.every((todo) => todo.completed);
            const toggleAllTodo = state.todos.map((todo) => ({
                ...todo,
                completed: !completed,
            }));
            newState = {
                ...state,
                todos: toggleAllTodo,
            };
            break;
        case DELETE_TODO:
            const newTodo = [...state.todos];
            newTodo.splice(action.payload, 1);
            newState = {
                ...state,
                todos: [...newTodo],
            };
            break;
        case SWITCHFILTER:
            newState = {
                ...state,
                filter: action.payload,
            };
            break;
        case CLEAR_ALL_TODO:
            newState = {
                ...state,
                todos: state.todos.filter((todo) => !todo.completed),
            };
            break;
        case START_EDIT_TODO:
            newState = {
                ...state,
                isEditIndex: action.payload,
            };
            break;
        // case SET_EDIT_TODO_INPUT:
        //     // newState = {
        //     //     ...state,
        //     //     editValueInput: action.payload,
        //     // };
        //     {
        //         const todoEditList = [...state.todos];
        //         todoEditList[state.isEditIndex].title = action.payload;
        //         newState = {
        //             ...state,
        //             todos: todoEditList,
        //         };
        //     }
        //     break;
        case END_EDIT_TODO:
            const todoEditList = [...state.todos];
            const updateTodo = { ...todoEditList[action.payload.index], title: action.payload.title };
            todoEditList[action.payload.index] = updateTodo;

            newState = {
                ...state,
                todos: todoEditList,
            };
            state.isEditIndex = null;
            break;
        case CANCEL_EDIT_TODO:
            const todoEditLisT = [...state.todos];
            const cancelEdit = todoEditLisT.map((todo) => {
                return {
                    ...todo,
                    title: action.payload,
                };
            });
            todoEditLisT[state.editIndex] = cancelEdit;

            newState = {
                ...state,
                todos: todoEditLisT,
            };
            state.isEditIndex = null;
            break;
        default:
            throw new Error('Invalid action');
    }

    localStorage.setItem('TODOS', JSON.stringify(newState));
    return newState;
};

export { initialState };
export default reducer;
