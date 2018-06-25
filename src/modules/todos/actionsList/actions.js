import axios from 'axios';

export const deleteActionItem = id => (
    dispatch => (
        axios.delete(`/todos/${id}`).then(() => (
            dispatch(deleteActionItemSuccess(id))
        ))
    )
);

const deleteActionItemSuccess = id => ({
    type: 'DELETE_ACTION_ITEM_SUCCESS',
    id
});

export const editActionItemName = ({ id, name, parentId }) => (
    dispatch => (
        axios.put(`/todos/${id}/`, {
            name,
            todo_list: parentId
        }).then((data) => {
            dispatch(editActionItemNameSuccess(data.data));
        })
    )
);

const editActionItemNameSuccess = ({ id, name: text }) => ({
    type: 'EDIT_ACTION_NAME_SUCCESS',
    id,
    text
});

export const toggleActionItem = ({ id, completed, parentId, name }) => (
    dispatch => (
        axios.put(`/todos/${id}/`, {
            name,
            is_complete: !completed,
            todo_list: parentId
        }).then((data) => {
            dispatch(toggleActionItemSuccess(data.data));
        })
    )
);

const toggleActionItemSuccess = ({ id, is_complete: completed }) => ({
    type: 'TOGGLE_ACTION_SUCCESS',
    id,
    completed
});