import React from 'react';
import ReactDOM from 'react-dom';
import styles from './EditTodoModal.module.css';
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button onClick={onClose} className={styles.closeButton}>X</button>
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};

export default Modal;