import React from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    ListItemSecondaryAction,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    ListItemText,
    Divider
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { addTodoList, editTodoListName } from './../../../actions';
import { connect } from 'react-redux';

class AddTodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addDialogOpen: false,
            inputValue: ''
        };

        this.openAddDialog = this.openAddDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveListItem = this.saveListItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <div style={{ paddingTop: '10px' }}>
                <ListItem>
                    <ListItemSecondaryAction onClick={ this.openAddDialog }>
                        <IconButton>
                            <Add/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider style={{ marginTop: '15px' }}/>

                <Dialog
                    open={this.state.addDialogOpen}
                    onClose={this.handleClose}
                >
                    <DialogTitle>New todo list</DialogTitle>
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

    openAddDialog() {
        this.setState({ addDialogOpen: true });
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    saveListItem() {
        if (this.state.inputValue.trim()) {
            this.props.dispatch(addTodoList(this.state.inputValue));

            this.setState({
                inputValue: ''
            });

            this.handleClose();
        }
    }

    handleClose() {
        this.setState({ addDialogOpen: false });
    }
}

AddTodoListItem.propTypes = {
    deleteTodoList: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default connect()(AddTodoListItem);