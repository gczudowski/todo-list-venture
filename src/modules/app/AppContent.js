import React from 'react';

const AppContent = (props) => (
    <div style={{ width: '80%', left: '20%', position: 'absolute' }}>
        { props.children }
    </div>
);

AppContent.propTypes = {

};

export default AppContent;
