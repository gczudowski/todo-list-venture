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


class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDialogOpen: false,
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
        // this.props.updateTodoList();
    }

    render() {
        return (
            <Dialog
                open={ this.state.isDialogOpen }
                onClose={ this.handleClose }
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
                    <Button onClick={ this.handleClose }>
                        Cancel
                    </Button>
                    <Button onClick={ this.saveListItem } color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    showEditDialog({ id, text }) {
        this.setState({ isDialogOpen: true, editId: id, inputValue: text });
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    saveListItem() {
        const { inputValue, editId } = this.state;

        if (inputValue.trim()) {
            this.props.editTodoListName(editId, inputValue);

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
        this.setState({ isDialogOpen: false });
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
