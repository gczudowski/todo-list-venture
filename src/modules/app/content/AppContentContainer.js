import React from 'react';
import { connect } from "react-redux";

import AppContent from './AppContentComponent';

const mapStateToProps = state => ({
    selectedTodoList: state.selectedTodoList
});

export default connect(
    mapStateToProps
)(AppContent);
