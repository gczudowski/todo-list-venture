import axios from 'axios';

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