import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { addAction } from './../../../actions';

class AddAction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={ this.handleFormSubmit } autoComplete="off" style={{ margin: '-12px 15px' }}>
                <TextField
                    label="Enter action name"
                    margin="normal"
                    onChange={ this.handleInputChange }
                    value={ this.state.inputValue }
                    fullWidth
                />
            </form>
        );
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if (this.state.inputValue.trim()) {
            this.props.dispatch(addAction(this.state.inputValue, this.props.selectedTodoList));

            this.setState({
                inputValue: ''
            });
        }
    }
};

export default connect()(AddAction);
