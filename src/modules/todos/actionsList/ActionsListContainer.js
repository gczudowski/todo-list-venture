import { connect } from 'react-redux';
import { toggleActionItem, deleteActionItem, editActionItemName } from './actions';
import ActionsList from './ActionsListComponent';

const mapStateToProps = state => ({
    actionsList: state.actionsList,
    selectedTodoList: state.selectedTodoList,
    selectedFilter: state.selectedFilter,
    actionsListFilter: state.actionsListFilter
});

const mapDispatchToProps = dispatch => ({
    toggleActionItem: actionData => dispatch(toggleActionItem(actionData)),
    deleteActionItem: id => dispatch(deleteActionItem(id)),
    editActionItemName: (actionData) => dispatch(editActionItemName(actionData)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsList);
