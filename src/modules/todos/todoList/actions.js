import axios from "axios/index";

export const addTodoList = name => (
    dispatch => (
        axios.post('/todolists/', {
            name
        }).then(data => (
            dispatch(addTodoListSuccess(data.data))
        ))
    )
);

export const addTodoListSuccess = ({ id, name: text }) => ({
    type: 'ADD_TODO_LIST_SUCCESS',
    id,
    text
});


export const updateTodoList = () => (
    dispatch => (
        axios.get('/todolists/').then((data) => (
            dispatch(updateTodoListSuccess(data.data))
        ))
    )
);

export const deleteTodoList = id => (
    dispatch => (
        axios.delete(`/todolists/${id}`).then(() => (
            dispatch(deleteTodoListSuccess(id))
        ))
    )
);

export const deleteTodoListSuccess = id => ({
    type: 'DELETE_TODO_LIST_SUCCESS',
    id
});

export const updateTodoListSuccess = todoList => ({
    type: 'TODO_LIST_UPDATE_SUCCESS',
    todoList
});

export const selectTodoList = (id, text) => (
    dispatch => {
        dispatch(updateActionsList(id));
        dispatch({
            type: 'SELECT_TODO_LIST',
            id,
            text
        });
    }
);

export const updateActionsList = id => {
    return dispatch => {
        return axios.get(`/todolists/${id}`).then((data) => {
            dispatch(updateActionsListSuccess(data.data));
        });
    }
};

export const updateActionsListSuccess = actionsList => ({
    type: 'ACTIONS_LIST_UPDATE_SUCCESS',
    actionsList
});

export const editTodoListName = (id, name) => (
    dispatch => (
        axios.put(`/todolists/${id}/`, {
            name
        }).then((data) => {
            dispatch(editTodoListNameSuccess(data.data));
        })
    )
);

export const editTodoListNameSuccess = todoData => ({
    type: 'EDIT_TODO_LIST_SUCCESS',
    id: todoData.id,
    text: todoData.name
});
