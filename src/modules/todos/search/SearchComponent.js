import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <form autoComplete="off" style={{ margin: '0 10px 0' }}>
                <TextField
                    label="Find your list"
                    margin="normal"
                    onChange={ this.handleInputChange }
                    value={ this.state.inputValue }
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        );
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });

        this.props.updateListFilter(event.target.value);
    }
}

export default Search;
