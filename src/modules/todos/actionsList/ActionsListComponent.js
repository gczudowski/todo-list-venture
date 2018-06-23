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

import ActionsListItem from './ActionsListItemComponent';
import { VisibilityFilters } from './../../../actions';

class ActionsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editDialogOpen: false,
            inputValue: '',
            editId: null,
            parentId: null
        };

        this.showEditDialog = this.showEditDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveActionItem = this.saveActionItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteActionItem = this.deleteActionItem.bind(this);
    }
    
    render() {
        const { actionsList, toggleActionItem, selectedFilter } = this.props;

        return (
            <div>
                <List>
                    { actionsList.map(todo => {
                        if (this.isItemMatchesVisibilityFilter(todo) && this.isItemMatchesSearchFilter(todo)) {
                            return (
                                <ActionsListItem
                                    key={ todo.id }
                                    { ...todo }
                                    toggleActionItem={ toggleActionItem }
                                    selectedFilter={ selectedFilter }
                                    showEditDialog={ () => {
                                        this.showEditDialog(todo);
                                    } }
                                />
                            )
                        } else {
                            return null;
                        }
                    }) }
                </List>

                <Dialog
                    open={this.state.editDialogOpen}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Edit action</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            label="Action name"
                            fullWidth
                            onChange={ this.handleInputChange }
                            value={ this.state.inputValue }
                        />
                    </DialogContent>
                    <DialogActions>
                        <IconButton onClick={ this.deleteActionItem }>
                            <Delete/>
                        </IconButton>
                        <Button onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={this.saveActionItem} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    isItemMatchesVisibilityFilter(todo) {
        return (todo.completed && this.props.selectedFilter === VisibilityFilters.SHOW_COMPLETED)
                || (!todo.completed && this.props.selectedFilter === VisibilityFilters.SHOW_ACTIVE)
                || (this.props.selectedFilter === VisibilityFilters.SHOW_ALL);
    }

    isItemMatchesSearchFilter(todo) {
        return (this.props.actionsListFilter && todo.text.includes(this.props.actionsListFilter))
                || (!this.props.actionsListFilter)
    }

    showEditDialog(todo) {
        this.setState({ editDialogOpen: true, editId: todo.id, inputValue: todo.text, parentId: todo.todoList });
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    saveActionItem() {
        if (this.state.inputValue.trim()) {
            this.props.editActionItemName({
                id: this.state.editId,
                name: this.state.inputValue,
                parentId: this.state.parentId
            });

            this.setState({
                inputValue: ''
            });
        }

        this.handleClose();
    }

    deleteActionItem() {
        this.props.deleteActionItem(
            this.state.editId
        );

        this.handleClose();
    }

    handleClose() {
        this.setState({ editDialogOpen: false });
    }
}

ActionsList.propTypes = {
    actionsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
};

export default ActionsList;
