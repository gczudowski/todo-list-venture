import React from 'react';
import { TextField } from '@material-ui/core';

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
        const { value: inputValue } = event.target;

        this.setState({ inputValue });
    }

    handleFormSubmit(event) {
        const { inputValue } = this.state;
        const { addAction, selectedTodoList } = this.props;

        event.preventDefault();

        if (inputValue.trim()) {
            addAction(inputValue, selectedTodoList);

            this.setState({
                inputValue: ''
            });
        }
    }
}

export default AddAction;
