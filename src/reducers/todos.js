const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO_LIST_SUCCESS':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];

        case 'TODO_LIST_UPDATE_SUCCESS':
            return action.todoList.map((item) => {
                return {
                    id: item.id,
                    text: item.name,
                    completed: false
                }
            });

        case 'EDIT_TODO_LIST_SUCCESS':
            return state.map((item) => {
                console.log('######### #debug item', item);
                return {
                    id: item.id,
                    text: item.id === action.id ? action.text : item.text,
                    todos_count: item.todos_count
                }
            });

        case 'DELETE_TODO_LIST_SUCCESS':
            return state.filter(todo => todo.id !== action.id);

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );

        default:
            return state
    }
};

export default todos;
