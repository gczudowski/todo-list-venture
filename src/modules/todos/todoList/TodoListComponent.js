import React from 'react';
import PropTypes from 'prop-types';
import {
    List,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    IconButton
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import TodoListItem from './TodoListItemComponent';
import {deleteTodoList} from "./actions";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.showModalBox = this.showModalBox.bind(this);
    }

    componentDidMount() {
        this.props.updateTodoList();
    }

    render() {
        return (
            <List>
                {this.props.todos.map(todo => {
                    if ((this.props.todoListFilter && todo.text.includes(this.props.todoListFilter))
                            || !this.props.todoListFilter) {
                        return (
                            <TodoListItem
                                key={ todo.id }
                                { ...todo }
                                selectTodoList={ () =>  { this.props.selectTodoList(todo.id, todo.text); } }
                                showEditDialog={ () =>  { this.showModalBox(todo); } }
                                selectedTodoList={ this.props.selectedTodoList }
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </List>
        );
    }

    showModalBox({ id, text }) {
        this.props.showModalBox({
            title: 'Edit todo list',
            inputLabel: 'List name',
            inputValue: text,
            editId: id,
            save: this.props.editTodoListName,
            delete: this.props.deleteTodoList
        });
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    updateTodoList: PropTypes.func.isRequired,
    deleteTodoList: PropTypes.func.isRequired,
};

export default TodoList;
