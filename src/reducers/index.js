import { combineReducers } from 'redux';

import todos from './todos';
import selectedFilter from './selectedFilter';
import actionsList from './actionsList';
import selectedTodoList from './selectedTodoList';
import todoListFilter from './todoListFilter';
import actionsListFilter from './actionsListFilter';

export default combineReducers({
    todos,
    selectedFilter,
    actionsList,
    selectedTodoList,
    todoListFilter,
    actionsListFilter
});
