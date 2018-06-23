const todoListFilter = (state = '', action) => {
    switch (action.type) {

        case 'UPDATE_TODO_LIST_FILTER':
            return action.filter;

        default:
            return state
    }
};

export default todoListFilter;
