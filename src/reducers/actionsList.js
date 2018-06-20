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
                todoList: item.todo_list
            }
        });

    default:
        return state
    }
};

export default todos;
