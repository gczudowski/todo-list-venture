import React from 'react';
import PropTypes from 'prop-types';
import {
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
            inputValue: null,
            editId: null
        };

        this.close = this.close.bind(this);
        this.save = this.save.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
    }

    componentDidUpdate() {
        if (this.state.inputValue === null && this.props.inputValue) {
            this.setState({
                inputValue: this.props.inputValue
            });
        }
    }

    render() {
        return (
            <Dialog
                open={ this.props.isModalVisible }
                onClose={ this.close }
            >
                <DialogTitle>{ this.props.title }</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label={ this.props.inputLabel }
                        fullWidth
                        onChange={ this.handleInputChange }
                        value={ this.state.inputValue }
                    />
                </DialogContent>
                <DialogActions>
                    { this.props.delete ?
                        <IconButton onClick={ this.deleteAction }>
                            <Delete/>
                        </IconButton>
                        : null
                    }
                    <Button onClick={ this.close }>
                        Cancel
                    </Button>
                    <Button onClick={ this.save } color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    save() {
        if (this.state.inputValue.trim()) {
            this.props.save(
                this.state.inputValue,
                this.props.editId
            );
        }

        this.close();
    }

    deleteAction() {
        this.props.delete(
            this.props.editId
        );

        this.close();
    }

    close() {
        this.setState({
            inputValue: null
        });

        this.props.hideModalBox();
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
