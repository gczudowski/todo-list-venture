import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography, ListSubheader } from '@material-ui/core';

import ActionsListItem from './ActionsListItem';

class ActionsList extends React.Component {
    render() {
        return (
            <div style={{ width: '70%', left: '30%', position: 'absolute' }}>
                <List subheader={<ListSubheader>Nested List Items</ListSubheader>}>
                    {this.props.actionsList.map(todo =>
                        <ActionsListItem
                            key={ todo.id }
                            { ...todo }
                            toggleTodo={ () => this.props.toggleTodo(todo.id) }
                            deleteTodoList={ () =>  { this.props.deleteTodoList(todo.id); } }
                        />
                    )}
                </List>
            </div>
        );
    }
}

ActionsList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    updateTodoList: PropTypes.func.isRequired
};

export default ActionsList;
