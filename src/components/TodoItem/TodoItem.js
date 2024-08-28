import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}>
        {todo.text}
      </span>
      <div className={styles.buttons}>
        <button onClick={() => onEdit(todo.id)} className={styles.editButton}>Edit</button>
        <button onClick={() => onDelete(todo.id)} className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TodoItem;