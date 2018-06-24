import { connect } from 'react-redux';
import { updateTodoList, deleteTodoList, selectTodoList, editTodoListName } from './actions';
import TodoList from './TodoListComponent';

const mapStateToProps = state => ({
    todos: state.todos,
    selectedTodoList: state.selectedTodoList,
    todoListFilter: state.todoListFilter
});

const mapDispatchToProps = dispatch => ({
    updateTodoList: () => dispatch(updateTodoList()),
    deleteTodoList: id => dispatch(deleteTodoList(id)),
    selectTodoList: (id, text) => dispatch(selectTodoList(id, text)),
    editTodoListName: (id, name) => dispatch(editTodoListName(id, name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
