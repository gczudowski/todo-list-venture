export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const showModalBox = (modalBoxData) => {
    console.log();

    return {
        type: 'SHOW_MODAL_BOX',
        ...modalBoxData
    }
};

export const hideModalBox = () => ({
    type: 'HIDE_MODAL_BOX'
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};