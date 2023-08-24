import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

// Lesson 8
// different assertions

test('should render correct amount of tasks', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('test 2', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});
