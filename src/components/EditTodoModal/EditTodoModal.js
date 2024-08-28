import React, { useState } from 'react';
import Modal from './Modal';
import styles from './EditTodoModal.module.css';

const EditTodoModal = ({ isOpen, onRequestClose, todo, onSave }) => {
  const [newText, setNewText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(todo.id, newText);
  };

  return (
    isOpen && (
      <Modal onClose={onRequestClose}>
        <form onSubmit={handleSubmit} className={styles.editForm}>
          <h2>Edit Task</h2>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className={styles.input}
          />
          <div className={styles.buttons}>
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
            <button
              type="button"
              onClick={onRequestClose}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    )
  );
};

export default EditTodoModal;