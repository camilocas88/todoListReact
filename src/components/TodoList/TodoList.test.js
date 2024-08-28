import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders no tasks message when list is empty', () => {
  render(<TodoList todos={[]} />);
  const messageElement = screen.getByText(/No tasks to display/i);
  expect(messageElement).toBeInTheDocument();
});