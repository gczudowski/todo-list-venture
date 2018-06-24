import { connect } from 'react-redux';

import AddAction from './AddActionComponent';
import { addAction } from './actions';

const mapStateToProps = state => ({
    selectedTodoList: state.selectedTodoList
});

const mapDispatchToProps = dispatch => ({
    addAction: (inputValue, selectedTodoList) => dispatch(addAction(inputValue, selectedTodoList)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAction);
