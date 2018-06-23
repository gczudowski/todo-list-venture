const todos = (state = [], action) => {
    switch (action.type) {

    case 'ADD_ACTION_SUCCESS':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                todoList: action.todoList
            }
        ];

    case 'ACTIONS_LIST_UPDATE_SUCCESS':
        return action.actionsList.map((item) => {
            return {
                id: item.id,
                text: item.name,
                todoList: item.todo_list,
                completed: item.is_complete
            }
        });

    case 'EDIT_ACTION_NAME_SUCCESS':
        return state.map((item) => {
            return {
                ...item,
                text: item.id === action.id ? action.text : item.text
            }
        });

    case 'DELETE_ACTION_ITEM_SUCCESS':
        return state.filter(todo => todo.id !== action.id);

    case 'TOGGLE_ACTION_SUCCESS':
        return state.map(todo =>
            (todo.id === action.id)
                ? { ...todo, completed: action.completed }
                : todo
        );

    default:
        return state
    }
};

export default todos;
