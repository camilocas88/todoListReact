import React, { useEffect, useState, Suspense } from 'react';
import TodoList from './components/TodoList/TodoList';
import useTodoStore from './store/todoStore';
import todoService from './services/todoService';



const EditTodoModal = React.lazy(() => import('./components/EditTodoModal/EditTodoModal'));

function App() {
  const { todos, setTodos, addTodo, updateTodo, deleteTodo } = useTodoStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await todoService.fetchTodos();
        const formattedTodos = data.map((todo) => ({
          ...todo,
          id: Number(todo.id),
        }))
        setTodos(formattedTodos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    loadTodos();
  }, [setTodos]);

  const handleToggleComplete = async (id) => {
    const todo = todos.find(todo => todo.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(id, updatedTodo);

    try {
      await todoService.updateTodo(id, updatedTodo);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDelete = async (id) => {
    deleteTodo(id);

    try {
      await todoService.deleteTodo(id);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEdit = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  const handleSave = async (id, newText) => {
    const todo = todos.find(todo => todo.id === id);
    const updatedTodo = { ...todo, text: newText };
    updateTodo(id, updatedTodo);

    try {
      await todoService.updateTodo(id, updatedTodo);
    } catch (error) {
      console.error('Error updating todo:', error);
    }

    setIsModalOpen(false);
    setSelectedTodo(null);
  };

  const handleAddTodo = async (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    addTodo(newTodo);

    try {
      await todoService.addTodo(newTodo);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <TodoList 
        todos={todos} 
        onToggleComplete={handleToggleComplete} 
        onDelete={handleDelete}
        onEdit={handleEdit}
        onAddTodo={handleAddTodo}
      />
     {selectedTodo && (
        <Suspense fallback={<div>Loading...</div>}>
          <EditTodoModal 
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            todo={selectedTodo}
            onSave={handleSave}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;