import React from 'react';
import { connect } from "react-redux";

import { hideModalBox } from './actions';
import ModalBox from './ModalBoxComponent';

const mapStateToProps = state => ({
    ...state.modalBox
});

const mapDispachToProps = {
    hideModalBox
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(ModalBox);
