const todos = (state = 0, action) => {
    switch (action.type) {

    case 'SELECT_TODO_LIST':
        console.log('######### #debug SELECT_TODO_LIST', action.id);

        return action.id;

    default:
        return state
    }
};

export default todos;
