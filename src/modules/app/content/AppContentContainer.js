import React from 'react';
import { connect } from "react-redux";

import { setVisibilityFilter } from '../../../actions';
import AppContent from './AppContentComponent';

const mapStateToProps = state => ({
    selectedTodoList: state.selectedTodoList
});

const mapDispatchToProps = {
    setVisibilityFilter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContent);
