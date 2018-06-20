import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import actionsList from './actionsList';
import selectedTodoList from './selectedTodoList';

export default combineReducers({
    todos,
    visibilityFilter,
    actionsList,
    selectedTodoList
});
