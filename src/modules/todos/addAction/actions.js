import axios from 'axios';

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

