import React from 'react';
import { connect } from "react-redux";
import { Drawer, List } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles'

import AddAction from './../todos/addAction/AddActionContainer';
import TodoList from './../todos/todoList/TodoListContainer';
import ActionsList from './../todos/actionsList/ActionsListContainer';
import AddTodoListItem from './../todos/todoList/AddTodoListItem';

const App = props => (
    <div>
        <Drawer variant="permanent" classes={{paper: props.classes.paper}}>
            <List>
                <AddTodoListItem />
                <TodoList/>
            </List>
        </Drawer>
        <AddAction selectedTodoList={ props.selectedTodoList }/>
        <ActionsList/>
    </div>
);

const mapStateToProps = state => ({
    selectedTodoList: state.selectedTodoList
});

export default connect(
    mapStateToProps
)(withStyles(
    createStyles({ paper: { width: '30%' } })
)(App));
