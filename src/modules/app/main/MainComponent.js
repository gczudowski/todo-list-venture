import React from 'react';
import { Drawer, List } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles'

import TodoList from '../../todos/todoList/TodoListContainer';
import AddTodoListItem from '../../todos/todoList/AddTodoListItemContainer';
import TodoSearch from '../../todos/search/TodoSearchContainer';
import AppContent from '../content/AppContentContainer';

const App = props => (
    <div>
        <Drawer variant="permanent" classes={{ paper: props.classes.paper }}>
            <List>
                <AddTodoListItem />
                <TodoSearch />
                <TodoList />
            </List>
        </Drawer>

        { props.selectedTodoList
            ? <AppContent />
            : null
        }

    </div>
);

export default withStyles(
    createStyles({ paper: { width: '20%' } })
)(App);
