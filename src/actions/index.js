export const showModalBox = (modalBoxData) => {
    return {
        type: 'SHOW_MODAL_BOX',
        ...modalBoxData
    }
};

export const hideModalBox = () => ({
    type: 'HIDE_MODAL_BOX'
});