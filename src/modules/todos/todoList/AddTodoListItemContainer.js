import { connect } from 'react-redux';
import { addTodoList } from './actions';
import AddTodoListItem from './AddTodoListItemComponent';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    addTodoList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoListItem);
