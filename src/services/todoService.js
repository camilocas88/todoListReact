const API_URL = "http://localhost:5001/todos";

export const fetchTodos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const data = await response.json();

    return data.map((todo) => ({
      ...todo,
      id: Number(todo.id),
    }));
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) {
      throw new Error("Failed to add todo");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodo),
    });
    if (!response.ok) {
      throw new Error("Failed to update todo");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

const todoService = {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};

export default todoService;
