import React, { useState } from 'react';
import './styles/App.css';
import { Todo } from './components/Todo';
import { Form } from './components/Form';

const intitializedTodos = [
    {id: 1, name: 'Go to the supermarket', complete: false},
    {id: 2, name: 'Call Alice', complete: false},
    {id: 3, name: 'Ask Alice to call Bob', complete: false},
    {id: 4, name: 'Do the dishes', complete: false},
    {id: 5, name: 'Change car tyres', complete: false}
];

export const App = () => {
    const [todos, setTodos] = useState(intitializedTodos);
    const [newTodoName, setNewTodoName] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const ids = todos.map((todo) => todo.id);
        const highestId = Math.max(...ids);

        setTodos([
            ...todos,
            {
                id: todos.length === 0 ? 0 : (highestId + 1),
                name: newTodoName,
                complete: false
            }
        ]);
        setNewTodoName('');
    }

    const setCompeleteStatus = (id) => {
        const todoItems = todos.map((item) => {
            if (item.id === id) {
                return {...item, complete: ! item.complete}
            }
            return item;
        });

        setTodos(todoItems);
    }

    const onRemoveClick = (id) => {
        const todoItems = todos.filter(todo => todo.id !== id)

        setTodos(todoItems);
    }

    const sortedArray = todos.sort((a, b) => a.complete - b.complete);

    return (
        <div>
            <h1>Todo list</h1>
            <Form
                onSubmit={(e) => onSubmit(e)}
                newTodoName={newTodoName}
                onInputChange={(e) => setNewTodoName(e.target.value)}
            />
            {sortedArray.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    setCompeleteStatus={setCompeleteStatus}
                    onRemoveClick={onRemoveClick}
                />
            ))}
            
        </div>
    );
}
