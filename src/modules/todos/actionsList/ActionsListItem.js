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
            } ref='container'>
                <ListItem button
                          onClick={ () => { this.toggleItem() } }
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
        const { id, completed, todoList, text } = this.props;

        if (completed  && this.props.selectedFilter === VisibilityFilters.SHOW_COMPLETED
                || !completed && this.props.selectedFilter === VisibilityFilters.SHOW_ACTIVE) {

            this.setState({
                visible: false
            });

            setTimeout(() => {
                const { container } = this.refs;

                if (container) {
                    container.style.display = 'none';
                }
            }, 300); // 300ms is animation delay
        }

        this.setState({
            checked: !completed
        });

        this.props.toggleActionItem({
            id,
            completed,
            parentId: todoList,
            name: text
        });
    }
}

ActionsListItem.propTypes = {
    deleteTodoList: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default ActionsListItem;