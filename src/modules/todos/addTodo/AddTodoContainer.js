import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { addTodoList } from './../../../actions';

class AddTodo extends React.Component {
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
            <form onSubmit={ this.handleFormSubmit } autoComplete="off">
                <TextField
                    label="Enter list name"
                    margin="normal"
                    onChange={ this.handleInputChange }
                    value={ this.state.inputValue }
                />
                <Button type="submit">
                    Add Todo
                </Button>
            </form>
        );
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if (this.state.inputValue.trim()) {
            this.props.dispatch(addTodoList(this.state.inputValue));

            this.setState({
                inputValue: ''
            });
        }
    }
};

export default connect()(AddTodo);
