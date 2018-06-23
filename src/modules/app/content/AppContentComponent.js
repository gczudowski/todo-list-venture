import React from 'react';

import AddAction from '../../todos/addAction/AddActionContainer';
import ActionsTitle from '../../todos/actionsTitle/ActionsTitleComponent';
import ActionsList from '../../todos/actionsList/ActionsListContainer';
import FilterTabsComponent from '../../todos/actionsList/FilterTabsComponent';
import ActionsSearch from '../../todos/search/ActionsSearchContainer';

const AppContent = props => (
    <div style={{ width: '80%', left: '20%', position: 'absolute' }}>
        <ActionsTitle title={ props.selectedTodoList.text } />
        <AddAction />
        <FilterTabsComponent setVisibilityFilter={ props.setVisibilityFilter } />
        <ActionsSearch />
        <ActionsList />
    </div>
);

AppContent.propTypes = {

};

export default AppContent;
