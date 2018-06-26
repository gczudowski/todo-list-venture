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