import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  it('renders the footer with the correct copyright text', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    
    const copyrightText = `© ${currentYear} All Rights Reserved. Content owned by Simmy Bajaj.`;
    expect(screen.getByText(copyrightText, { exact: false })).toBeInTheDocument();
  });
});