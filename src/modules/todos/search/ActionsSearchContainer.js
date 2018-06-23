import { connect } from 'react-redux';
import { updateActionsListFilter } from './../../../actions';
import Search from './SearchComponent';

const mapStateToProps = state => ({
    listFilter: state.actionsListFilter
});

const mapDispatchToProps = dispatch => ({
    updateListFilter: filter => dispatch(updateActionsListFilter(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
