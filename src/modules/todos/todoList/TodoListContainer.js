import { connect } from 'react-redux';
import { updateTodoList, deleteTodoList, selectTodoList, editTodoListName } from './../../../actions';
import TodoList from './TodoListComponent';

const mapStateToProps = state => ({
    todos: state.todos,
    selectedTodoList: state.selectedTodoList
});

const mapDispatchToProps = dispatch => ({
    updateTodoList: () => dispatch(updateTodoList()),
    deleteTodoList: id => dispatch(deleteTodoList(id)),
    selectTodoList: id => dispatch(selectTodoList(id)),
    editTodoListName: (id, name) => dispatch(editTodoListName(id, name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
