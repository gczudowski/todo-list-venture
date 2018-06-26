import React from 'react';
// import PropTypes from 'prop-types';
import {
    AppBar,
    Tabs,
    Tab
} from '@material-ui/core';

import VisibilityFilters from '../../../constants/visibilityFilters';

class FilterTabsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const { value } = this.state;

        return (
            <AppBar position="static" style={{ marginTop: '2px' }}>
                <Tabs value={ value } onChange={ this.handleChange }>
                    <Tab label="All" />
                    <Tab label="Incomplete" />
                    <Tab label="Complete" />
                </Tabs>
            </AppBar>
        );
    }

    handleChange(event, value) {
        this.setState({
            value
        });

        this.props.setVisibilityFilter(
            this.indexToFilter(value)
        );
    }

    indexToFilter(index) {
        const filters = [
            VisibilityFilters.SHOW_ALL,
            VisibilityFilters.SHOW_ACTIVE,
            VisibilityFilters.SHOW_COMPLETED
        ];

        return filters[index];
    }
}

FilterTabsComponent.propTypes = {

};

export default FilterTabsComponent;
