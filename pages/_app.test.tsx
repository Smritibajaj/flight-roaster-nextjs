import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './_app';

// Mock component to pass as a child
const MockComponent = () => <div>Hello, World!</div>;

describe('_app Component', () => {
  it('renders the child component', () => {
    render(<App Component={MockComponent} pageProps={{}} />);

    // Check if the child component content is displayed
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
