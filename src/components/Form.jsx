import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

export const Form = ({ onSubmit, newTodoName, onInputChange }) => (
    <form
        className="form"
        onSubmit={onSubmit}>
        <input
            aria-label="add-new-input"
            placeholder="Add new todo"
            value={newTodoName}
            onChange={onInputChange}
            type="text"
        />
        <button
            className="btn"
            type="submit"
            value="Submit"
        >
            Add
        </button>
    </form>
);

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    newTodoName: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
};
