import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ deleteTodoList, completed, text }) => (
    <div>
        <span>
            { text }
        </span>

        <span onClick={ deleteTodoList }>
            Delete
        </span>
    </div>
);

Todo.propTypes = {
    deleteTodoList: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
