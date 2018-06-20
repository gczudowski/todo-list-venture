import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters, updateTodoList, deleteTodoList } from './../../../actions';
import ActionsList from './ActionsListComponent';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    actionsList: state.actionsList,
    selectedTodoList: state.selectedTodoList
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodoList: () => dispatch(updateTodoList()),
    deleteTodoList: id => dispatch(deleteTodoList(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsList);
