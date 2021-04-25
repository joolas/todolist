import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

export const Todo = ({ todo, setCompeleteStatus, onRemoveClick }) => (
    <div className="wrapper">
        <h3 className={todo.complete ? 'line-through' : ''}>{todo.name}</h3>
        <button
            className={todo.complete ? 'btn btn-complete' : 'btn btn-success'}
            onClick={() => setCompeleteStatus(todo.id)}
        >
            {todo.complete ? 'Incomplete' : 'Complete'}
        </button>
        <button
            className="btn btn-remove"
            onClick={() => onRemoveClick(todo.id)}
        >
            Remove from list
        </button>
    </div>
);

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number, 
        name: PropTypes.string, 
        complete: PropTypes.bool,
    }).isRequired,
    setCompeleteStatus: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
};
