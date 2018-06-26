import { connect } from 'react-redux';
import { addTodoList } from './actions';
import { showModalBox } from '../../../actions';
import AddTodoListItem from './AddTodoListItemComponent';

const mapDispatchToProps = {
    addTodoList,
    showModalBox
};

export default connect(
    null,
    mapDispatchToProps
)(AddTodoListItem);
