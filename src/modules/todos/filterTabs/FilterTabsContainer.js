import { connect } from 'react-redux';

import { setVisibilityFilter } from './actions';
import FilterTabs from './FilterTabsComponent';


const mapDispatchToProps = {
    setVisibilityFilter
};

export default connect(
    null,
    mapDispatchToProps
)(FilterTabs);
