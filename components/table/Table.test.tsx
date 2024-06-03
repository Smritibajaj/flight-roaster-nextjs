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

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    const nameHeader = screen.getByText('Name1 🔼');
    userEvent.click(nameHeader);
   
    expect(nameHeader).toHaveTextContent("Name1 🔼");

    userEvent.click(nameHeader);
    expect(nameHeader).toHaveTextContent("Name1 🔼");
  });

  it('filters data based on search input', () => {
    const searchInput = screen.getByPlaceholderText('Search Flights...');
    userEvent.type(searchInput, 'John');

    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    
  });

  it('toggles background color every 5 seconds', () => {
    const firstRow = screen.getAllByRole('row')[1]; // Skip header, get first data row
    expect(firstRow).toHaveClass('bg-white');
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(firstRow).toHaveClass('bg-gray-300');

    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(firstRow).toHaveClass('bg-white');
  });
});
