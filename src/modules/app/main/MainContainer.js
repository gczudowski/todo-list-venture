import React from 'react';
import { connect } from "react-redux";

import App from './MainComponent';

const mapStateToProps = state => ({
    selectedTodoList: state.selectedTodoList
});

export default connect(
    mapStateToProps
)(App);
