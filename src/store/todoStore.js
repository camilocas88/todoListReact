import create from 'zustand';

const useTodoStore = create(set => ({
  todos: [],
  addTodo: (todo) => set(state => ({ todos: [...state.todos, todo] })),
  updateTodo: (id, updatedTodo) => set(state => ({
    todos: state.todos.map(todo => todo.id === id ? updatedTodo : todo)
  })),
  deleteTodo: (id) => set(state => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  setTodos: (todos) => set({ todos })
}));

export default useTodoStore;