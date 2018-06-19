import axios from 'axios';

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const updateTodoList = () => {
    return dispatch => {
        return axios.get('https://todos.venturedevs.net/api/todolists/').then((data) => {
            dispatch(updateTodoListSuccess(data.data));
        });
    }
};

export const updateTodoListSuccess = todoList => ({
    type: 'TODO_LIST_UPDATE_SUCCESS',
    todoList
});

export const addTodoList = name => {
    return dispatch => {
        return axios.post('https://todos.venturedevs.net/api/todolists/', {
            name
        }).then((data) => {
            dispatch(addTodoListSuccess(data.data));
        });
    }
};

export const addTodoListSuccess = todoData => ({
    type: 'ADD_TODO_LIST_SUCCESS',
    id: todoData.id,
    text: todoData.name
});

export const deleteTodoList = id => {
    console.log('######### #debug deleteTodoList id', id);

    return dispatch => {
        return axios.delete(`https://todos.venturedevs.net/api/todolists/${id}`).then(() => {
            dispatch(deleteTodoListSuccess(id));
        });
    }
};

export const deleteTodoListSuccess = id => ({
    type: 'DELETE_TODO_LIST_SUCCESS',
    id
});
