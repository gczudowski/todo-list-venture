const todos = (state = 0, action) => {
    switch (action.type) {

    case 'SELECT_TODO_LIST':
        return {
            id: action.id,
            text: action.text
        };

    default:
        return state
    }
};

export default todos;
