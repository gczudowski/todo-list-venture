import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';


const ActionsTitle = (props) => (
    <Typography variant="headline" style={{ marginLeft: '22px', height: '50px', display: 'inline-flex', alignItems: 'center' }}>
        <div>{ props.title }</div>
    </Typography>
);

ActionsTitle.propTypes = {

};

export default ActionsTitle;
