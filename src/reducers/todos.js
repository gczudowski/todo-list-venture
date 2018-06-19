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
