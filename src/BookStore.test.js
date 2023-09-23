import { render, screen } from '@testing-library/react';
import BookStore from './components/BookStore';

test('renders learn react link', () => {
  render(<BookStore />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
