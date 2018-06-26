import React from 'react';
import PropTypes from 'prop-types';
import {
    List
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import ActionsListItem from './ActionsListItemComponent';
import VisibilityFilters from './../../../constants/visibilityFilters';

class ActionsList extends React.Component {
    constructor(props) {
        super(props);

        this.showModalBox = this.showModalBox.bind(this);
        this.save = this.save.bind(this);
    }
    
    render() {
        const { actionsList, toggleActionItem, selectedFilter } = this.props;

        return (
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
                                    this.showModalBox(todo);
                                } }
                            />
                        )
                    } else {
                        return null;
                    }
                }) }
            </List>
        );
    }

    isItemMatchesVisibilityFilter(todo) {
        const { selectedFilter } = this.props;
        const { completed } = todo;
        const { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } = VisibilityFilters;

        return (completed && selectedFilter === SHOW_COMPLETED)
                || (!completed && selectedFilter === SHOW_ACTIVE)
                || (selectedFilter === SHOW_ALL);
    }

    isItemMatchesSearchFilter(todo) {
        const { actionsListFilter } = this.props;

        return (actionsListFilter && todo.text.includes(actionsListFilter))
                || (!actionsListFilter);
    }

    showModalBox({ id, text, todoList }) {
        this.props.showModalBox({
            title: 'Edit action',
            inputLabel: 'Action name',
            inputValue: text,
            editId: id,
            save: (name) => this.save({ id, name, todoList }),
            delete: this.props.deleteActionItem
        });
    }

    save({ id, name, todoList: parentId }) {
        this.props.editActionItemName({
            id,
            name,
            parentId
        });
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
