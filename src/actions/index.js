export const showModalBox = (modalBoxData) => {
    return {
        type: 'SHOW_MODAL_BOX',
        ...modalBoxData
    }
};
