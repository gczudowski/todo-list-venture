import { connect } from 'react-redux';

import { toggleActionItem, deleteActionItem, editActionItemName } from './actions';
import { showModalBox } from './../../../actions';
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
    showModalBox
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsList);
