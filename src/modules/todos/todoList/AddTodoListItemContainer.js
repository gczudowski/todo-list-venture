import { connect } from 'react-redux';
import { addTodoList } from './../../../actions';
import AddTodoListItem from './AddTodoListItemComponent';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    addTodoList: inputValue => dispatch(addTodoList(inputValue)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoListItem);
