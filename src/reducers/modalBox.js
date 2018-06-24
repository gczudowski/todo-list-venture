const selectedFilter = (state = { isModalVisible: false }, action) => {
    switch (action.type) {
    case 'SHOW_MODAL_BOX':
        return {
            ...action,
            isModalVisible: true
        };

    case 'HIDE_MODAL_BOX':
        return {
            isModalVisible: false
        };

    default:
        return state;
    }
};

export default selectedFilter;
