import { connect } from 'react-redux';

import { toggleActionItem, deleteActionItem, editActionItemName } from './actions';
import ActionsList from './ActionsListComponent';

const mapStateToProps = state => ({
    actionsList: state.actionsList,
    selectedTodoList: state.selectedTodoList,
    selectedFilter: state.selectedFilter,
    actionsListFilter: state.actionsListFilter
});

const mapDispatchToProps = {
    toggleActionItem,
    deleteActionItem,
    editActionItemName,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsList);
