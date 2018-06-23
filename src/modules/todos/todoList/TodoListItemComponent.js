import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

const Todo = ({ id, showEditDialog, completed, text, selectTodoList, selectedTodoList }) => (
    <ListItem
        button
        onClick={ selectTodoList }
        style={ selectedTodoList.id === id ? { backgroundColor: 'lightgrey' } : null }
    >
        <ListItemText
            primary={ text }
        />
        <ListItemSecondaryAction onClick={ showEditDialog }>
            <IconButton>
                <Edit />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
);

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;