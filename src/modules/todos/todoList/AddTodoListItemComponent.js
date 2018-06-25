import React from 'react';
// import PropTypes from 'prop-types';
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
    Divider
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { connect } from 'react-redux';
import {showModalBox} from "../../../actions";

class AddTodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.showModalBox = this.showModalBox.bind(this);
    }

    render() {
        return (
            <div style={{ paddingTop: '10px' }}>
                <ListItem>
                    <ListItemSecondaryAction onClick={ this.showModalBox }>
                        <IconButton>
                            <Add/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider style={{ marginTop: '15px' }}/>
            </div>
        );
    }

    showModalBox() {
        this.props.showModalBox({
            title: 'New todo list',
            inputLabel: 'List name',
            inputValue: '',
            save: this.props.addTodoList
        });
    }
}

AddTodoListItem.propTypes = {
};

export default connect()(AddTodoListItem);