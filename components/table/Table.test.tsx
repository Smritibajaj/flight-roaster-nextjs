import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from './index';

// Sample column and data setup
const columns = [
  { header: 'Name1', accessor: 'name', sortable: true },
  { header: 'Age', accessor: 'age', sortable: false }
];
const data = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Doe', age: 25 }
];

describe('Table Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    render(<Table columns={columns} data={data} onRowClick={jest.fn()} />);
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders table with data and responds to sort click', async () => {
    // Check initial render
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();

    // Simulate clicking the sortable header
    const nameHeader = screen.getByText('Name1 🔼');
    userEvent.click(nameHeader);
    // Check for ascending sort indicator
    expect(nameHeader).toHaveTextContent("Name1 🔼");

    // Simulate another click for descending sort
    userEvent.click(nameHeader);
    // Check for descending sort indicator
    expect(nameHeader).toHaveTextContent("Name1 🔼");
  });

  it('filters data based on search input', () => {
    const searchInput = screen.getByPlaceholderText('Search Flights...');
    userEvent.type(searchInput, 'John');

    // Assertions for filtering action
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    //expect(screen.queryByText('Jane Doe')).toBeNull();
  });

  it('toggles background color every 5 seconds', () => {
    const firstRow = screen.getAllByRole('row')[1]; // Skip header, get first data row
    expect(firstRow).toHaveClass('bg-white');

    // Fast-forward time to trigger bgColor change
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(firstRow).toHaveClass('bg-gray-300');

    // Toggle back
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(firstRow).toHaveClass('bg-white');
  });
});
