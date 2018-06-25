import axios from 'axios';

export const addAction = (name, selectedTodoList) => (
    dispatch => (
        axios.post('/todos/', {
            name: name,
            is_complete: false,
            todo_list: selectedTodoList.id
        }).then((data) => {
            dispatch(addActionSuccess(data.data));
        })
    )
);

export const addActionSuccess = ({ id, name: text, todo_list: todoList, is_complete: isComplete }) => ({
    type: 'ADD_ACTION_SUCCESS',
    id,
    text,
    todoList,
    isComplete,
});

