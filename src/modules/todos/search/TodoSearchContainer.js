import { connect } from 'react-redux';
import { updateTodoListFilter } from './actions';
import Search from './SearchComponent';

const mapStateToProps = state => ({
    listFilter: state.todoListFilter
});

const mapDispatchToProps = dispatch => ({
    updateListFilter: filter => dispatch(updateTodoListFilter(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
