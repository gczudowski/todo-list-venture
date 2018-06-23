import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { VisibilityFilters } from './../../../actions';

class ActionsListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            checked: props.completed
        };

        this.toggleItem = this.toggleItem.bind(this);
    }

    render() {
        const { showEditDialog, text } = this.props;
        const { checked } = this.state;

        return (
            <div style={
                this.state.visible ?
                    {
                        opacity: '1',
                    }
                    :
                    {
                        opacity: '0',
                        transition: 'opacity 300ms linear'
                    }
            } ref='actionItemContainer'>
                <ListItem button
                          onClick={ this.toggleItem }
                >
                    <Checkbox
                        checked={ checked }
                        disableRipple
                    />
                    <ListItemText
                        primary={ text }
                    />
                    <ListItemSecondaryAction onClick={ showEditDialog }>
                        <IconButton>
                            <Edit />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </div>
        );
    }

    toggleItem() {
        const { id, completed, todoList: parentId , text: name } = this.props;

        if (this.shouldHideItemAfterToggling()) {
            this.hideItem();
        }

        this.setState({
            checked: !completed
        });

        this.props.toggleActionItem({
            id,
            completed,
            parentId,
            name
        });
    }

    shouldHideItemAfterToggling() {
        const { completed, selectedFilter } = this.props;
        const { SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

        return (completed && selectedFilter === SHOW_COMPLETED)
                || (!completed && selectedFilter === SHOW_ACTIVE);
    }

    hideItem() {
        this.setState({
            visible: false
        });

        setTimeout(() => {
            const { actionItemContainer } = this.refs;

            if (actionItemContainer) {
                actionItemContainer.style.display = 'none';
            }
        }, 300); // 300ms is animation delay
    }
}

ActionsListItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default ActionsListItem;