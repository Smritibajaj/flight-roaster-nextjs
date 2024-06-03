import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';  

describe('Header Component', () => {
  const title = "Test Header Title";

  it('renders the header with the provided title', () => {
    render(<Header title={title} />);
    const headingElement = screen.getByText(title);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('font-bold text-center');
  });
});