import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
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
                    label="Search"
                    margin="normal"
                    onChange={ this.handleInputChange }
                    value={ this.state.inputValue }
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        );
    }

    handleInputChange(event) {
        const { value: inputValue } = event.target;

        this.setState({ inputValue });

        this.props.updateListFilter(inputValue);
    }
}

export default Search;
