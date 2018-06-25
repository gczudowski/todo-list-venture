import { connect } from 'react-redux';
import { updateTodoList, deleteTodoList, selectTodoList, editTodoListName } from './actions';
import TodoList from './TodoListComponent';

const mapStateToProps = state => ({
    todos: state.todos,
    selectedTodoList: state.selectedTodoList,
    todoListFilter: state.todoListFilter
});

const mapDispatchToProps = {
    updateTodoList,
    deleteTodoList,
    selectTodoList,
    editTodoListName
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
