import React, { useReducer, useEffect, useMemo } from "react";
import { Action, State, TableProps } from "./types";


const initialState: State = {
  sortConfig: { key: 'id', direction: "ascending" },
  bgColor: true,
  searchTerm: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SORT_CONFIG":
      return { ...state, sortConfig: action.payload };
    case "TOGGLE_BG_COLOR":
      return { ...state, bgColor: !state.bgColor };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

const Table: React.FC<TableProps> = ({ columns, data, onRowClick }) => {
  const [{ sortConfig, bgColor, searchTerm }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const interval = setInterval(
      () => dispatch({ type: "TOGGLE_BG_COLOR" }),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const filteredAndSortedData = useMemo(() => {
    let filteredData = data.filter((item) =>
      columns.some((column) =>
        item[column.accessor]?.toString().toLowerCase().includes(searchTerm)
      )
    );

    if (sortConfig?.key) {
      filteredData.sort((a, b) => {
        const valueA = a[sortConfig?.key];
        const valueB = b[sortConfig?.key];
        return valueA < valueB
          ? sortConfig.direction === "ascending"
            ? -1
            : 1
          : valueA > valueB
          ? sortConfig.direction === "ascending"
            ? 1
            : -1
          : 0;
      });
    }
    return filteredData;
  }, [data, searchTerm, sortConfig, columns]);

  const handleSort = (key: string) => {
    const column = columns.find((col) => col.accessor === key);
    if (column && column.sortable) {
      const direction =
        sortConfig.key === key && sortConfig.direction === "ascending"
          ? "descending"
          : "ascending";
      dispatch({ type: "SET_SORT_CONFIG", payload: { key, direction } });
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    dispatch({ type: "SET_SEARCH_TERM", payload: value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Flights..."
        className="mb-4 p-2 border"
        onChange={handleSearch}
      />
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="border p-2 text-left cursor-pointer"
                onClick={() => handleSort(column.accessor)}
              >
                {column.header}
                {column.sortable
                  ? sortConfig.direction === "ascending"
                    ? " 🔼"
                    : " 🔽"
                  : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0
                  ? bgColor
                    ? "bg-white"
                    : "bg-gray-300"
                  : bgColor
                  ? "bg-gray-300"
                  : "bg-white"
              }`}
              onClick={() => onRowClick(row)}
            >
              {columns.map((column, columnIndex) => (
                <td key={columnIndex} className="border p-2">
                  {column.render
                    ? column.render(row[column.accessor], row)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
