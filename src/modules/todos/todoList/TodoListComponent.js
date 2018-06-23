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

import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editDialogOpen: false,
            inputValue: '',
            editId: null
        };

        this.showEditDialog = this.showEditDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveListItem = this.saveListItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
    }

    componentDidMount() {
        this.props.updateTodoList();
    }

    render() {
        console.log('######### #debug TodoListComponent render this.props', this.props.toodListFilter);

        return (
            <div>
                <List>
                    {this.props.todos.map(todo => {
                        if ((this.props.todoListFilter && todo.text.includes(this.props.todoListFilter))
                                || !this.props.todoListFilter) {
                            return (
                                <TodoListItem
                                    key={ todo.id }
                                    { ...todo }
                                    selectTodoList={ () =>  { this.props.selectTodoList(todo.id, todo.text); } }
                                    showEditDialog={ () =>  { this.showEditDialog(todo); } }
                                    selectedTodoList={ this.props.selectedTodoList }
                                />
                            );
                        } else {
                            return null;
                        }

                    })}
                </List>

                <Dialog
                    open={this.state.editDialogOpen}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Edit action</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            label="List name"
                            fullWidth
                            onChange={ this.handleInputChange }
                            value={ this.state.inputValue }
                        />
                    </DialogContent>
                    <DialogActions>
                        <IconButton onClick={ this.deleteListItem }>
                            <Delete/>
                        </IconButton>
                        <Button onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={this.saveListItem} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    showEditDialog(todo) {
        this.setState({ editDialogOpen: true, editId: todo.id, inputValue: todo.text });
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    saveListItem() {
        if (this.state.inputValue.trim()) {
            this.props.editTodoListName(this.state.editId, this.state.inputValue);

            this.setState({
                inputValue: ''
            });
        }

        this.handleClose();
    }

    deleteListItem() {
        this.props.deleteTodoList(
            this.state.editId
        );

        this.handleClose();
    }

    handleClose() {
        this.setState({ editDialogOpen: false });
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
    updateActionsList: PropTypes.func.isRequired,
    showEditDialog: PropTypes.func.isRequired
};

export default TodoList;
