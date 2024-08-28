import React, { useState } from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';
import Filters from '../Filters/Filters';

function TodoList({ todos, onToggleComplete, onDelete, onEdit, onAddTodo }) {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className={styles.todoListContainer}>
      <AddTodo onAddTodo={onAddTodo} />
      
      <Filters currentFilter={filter} onFilterChange={setFilter} />
      
      <ul>
        {filteredTodos.length === 0 ? <p>No tasks to display.</p> : (
          filteredTodos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onToggleComplete={onToggleComplete} 
              onDelete={onDelete} 
              onEdit={onEdit} 
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;