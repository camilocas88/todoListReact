import React, { useState } from 'react';
import styles from './AddTodo.module.css';

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAddTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTodoForm}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.addButton}>Add</button>
    </form>
  );
};

export default AddTodo;