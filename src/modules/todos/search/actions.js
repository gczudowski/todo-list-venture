export const updateTodoListFilter = filter => (
    dispatch => (
        dispatch({
            type: 'UPDATE_TODO_LIST_FILTER',
            filter
        })
    )
);

export const updateActionsListFilter = filter => (
    dispatch => (
        dispatch({
            type: 'UPDATE_ACTIONS_LIST_FILTER',
            filter
        })
    )
);
