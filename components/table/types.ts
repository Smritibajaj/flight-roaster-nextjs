export type Column = {
  header: string;
  accessor: string;
  sortable?: boolean;
  render?: (value: any, row: DataItem) => React.ReactNode;
};

export type DataItem = {
  [key: string]: any;
};

export interface TableProps {
  columns: Column[];
  data: DataItem[];
  onRowClick: (item: DataItem) => void;
}

export interface State {
  sortConfig: { key: string; direction: "ascending" | "descending" };
  bgColor: boolean;
  searchTerm: string;
}

export type Action =
  | {
      type: "SET_SORT_CONFIG";
      payload: { key: string; direction: "ascending" | "descending" };
    }
  | { type: "TOGGLE_BG_COLOR" }
  | { type: "SET_SEARCH_TERM"; payload: string };
