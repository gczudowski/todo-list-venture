import React from 'react';
import { connect } from "react-redux";
import { Drawer, List } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles'

import AddAction from './../todos/addAction/AddActionContainer';
import ActionsTitle from './../todos/actionsTitle/ActionsTitle';
import TodoList from './../todos/todoList/TodoListContainer';
import ActionsList from './../todos/actionsList/ActionsListContainer';
import AddTodoListItem from './../todos/todoList/AddTodoListItem';
import ActionsStatusFilter from './../todos/actionsList/ActionsStatusFilter';
import TodoSearch from './../todos/search/TodoSearchContainer';
import ActionsSearch from './../todos/search/ActionsSearchContainer';
import AppContent from './AppContent';
import { deleteActionItem, editActionItemName, toggleActionItem, setVisibilityFilter } from "../../actions";

const App = props => (
    <div>
        <Drawer variant="permanent" classes={{ paper: props.classes.paper }}>
            <List>
                <AddTodoListItem />
                <TodoSearch />
                <TodoList />
            </List>
        </Drawer>

        { props.selectedTodoList ?
            <AppContent>
                <ActionsTitle title={ props.selectedTodoList.text } />
                <AddAction selectedTodoList={ props.selectedTodoList } />
                <ActionsStatusFilter setVisibilityFilter={ props.setVisibilityFilter } />
                <ActionsSearch />
                <ActionsList />
            </AppContent>

            : null
        }

    </div>
);

const mapStateToProps = state => ({
    selectedTodoList: state.selectedTodoList
});

const mapDispatchToProps = dispatch => ({
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(
    createStyles({ paper: { width: '20%' } })
)(App));
