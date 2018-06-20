import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const ActionsListItem = ({ deleteTodoList, completed, text }) => (
    <ListItem button>
        <ListItemText
            primary={ text }
        />
        <ListItemSecondaryAction onClick={ deleteTodoList }>
            <IconButton>
                <Delete />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
);

ActionsListItem.propTypes = {
    deleteTodoList: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default ActionsListItem;