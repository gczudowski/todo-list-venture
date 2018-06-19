import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.updateTodoList();
    }

    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <TodoListItem
                        key={ todo.id }
                        { ...todo }
                        toggleTodo={ () => this.props.toggleTodo(todo.id) }
                        deleteTodoList={ () =>  { console.log('#debug todo.id', todo.id); this.props.deleteTodoList(todo.id); } }
                    />
                )}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    updateTodoList: PropTypes.func.isRequired
};

export default TodoList;
