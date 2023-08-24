import { render, screen } from '@testing-library/react';
import Header from '../Header';

// Lesson 7
// different query methods
// test('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test('heading test 2', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: 'My Header' });
//   expect(headingElement).toBeInTheDocument();
// });

// test('heading test 3', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// test('heading test 3', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// test('heading test 5', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test('heading test 6', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// Lesson 8
// different assertions

test('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
