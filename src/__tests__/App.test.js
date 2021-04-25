import React, { Component } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { App } from '../App';

describe('TodoList', () => {
    it('renders App', () => {
        render(<App />);
        expect(screen.getByText('Todo list'));
        expect(screen.getByText('Ask Alice to call Bob'));
    });

    it('add new todo', () => {
        render(<App />);
        const input = screen.getByLabelText('add-new-input');

        expect(input.value).toBe("");
        fireEvent.change(input, { target: { value: "Clean house" }});
        expect(input.value).toBe("Clean house");

        fireEvent.click(screen.getByText('Add'));
        expect(input.value).toBe("");
        expect(screen.getByText('Clean house'));
    })
});