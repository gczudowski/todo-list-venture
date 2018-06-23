import axios from 'axios';

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const updateTodoList = () => {
    return dispatch => {
        return axios.get('/todolists/').then((data) => {
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
        return axios.post('/todolists/', {
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

export const editTodoListName = (id, name) => {
    return dispatch => {
        return axios.put(`/todolists/${id}/`, {
            name
        }).then((data) => {
            dispatch(editTodoListSuccess(data.data));
        });
    }
};

export const editTodoListSuccess = todoData => ({
    type: 'EDIT_TODO_LIST_SUCCESS',
    id: todoData.id,
    text: todoData.name
});

export const deleteTodoList = id => {
    return dispatch => {
        return axios.delete(`/todolists/${id}`).then(() => {
            dispatch(deleteTodoListSuccess(id));
        });
    }
};

export const deleteTodoListSuccess = id => ({
    type: 'DELETE_TODO_LIST_SUCCESS',
    id
});

export const selectTodoList = (id, text) => {
    return dispatch => {
        dispatch(updateActionsList(id));
        dispatch({
            type: 'SELECT_TODO_LIST',
            id,
            text
        });
    }
};

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

export const addAction = (name, selectedTodoList) => {
    return dispatch => {
        return axios.post('/todos/', {
            name: name,
            is_complete: false,
            todo_list: selectedTodoList.id
        }).then((data) => {
            dispatch(addActionSuccess(data.data));
        });
    }
};

export const addActionSuccess = actionData => ({
    type: 'ADD_ACTION_SUCCESS',
    id: actionData.id,
    text: actionData.name,
    todoList: actionData.todo_list,
    isComplete: actionData.is_complete
});





export const deleteActionItem = id => {
    return dispatch => {
        return axios.delete(`/todos/${id}`).then(() => {
            dispatch(deleteActionItemSuccess(id));
        });
    }
};

export const deleteActionItemSuccess = id => ({
    type: 'DELETE_ACTION_ITEM_SUCCESS',
    id
});


export const editActionItemName = ({ id, name, parentId }) => {
    return dispatch => {
        return axios.put(`/todos/${id}/`, {
            name,
            todo_list: parentId
        }).then((data) => {
            dispatch(editActionItemNameSuccess(data.data));
        });
    }
};

export const editActionItemNameSuccess = todoData => ({
    type: 'EDIT_ACTION_NAME_SUCCESS',
    id: todoData.id,
    text: todoData.name
});

export const toggleActionItem = ({ id, completed, parentId, name }) => {
    return dispatch => {
        return axios.put(`/todos/${id}/`, {
            name,
            is_complete: !completed,
            todo_list: parentId
        }).then((data) => {
            dispatch(toggleActionItemSuccess(data.data));
        });
    }
};

export const toggleActionItemSuccess = todoData => ({
    type: 'TOGGLE_ACTION_SUCCESS',
    id: todoData.id,
    completed: todoData.is_complete
});

export const updateTodoListFilter = filter => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_TODO_LIST_FILTER',
            filter
        });
    }
};

export const updateActionsListFilter = filter => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_ACTIONS_LIST_FILTER',
            filter
        });
    }
};
