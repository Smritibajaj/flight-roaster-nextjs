import { getFormattedTime, getStatusColor } from "../flightDetailCard/utils";
import Chips from "../chips";
export const columns = [
  { header: "Flight Number", accessor: "flightNumber", sortable: true },
  { header: "Airline", accessor: "airline" },
  { header: "Origin", accessor: "origin" },
  { header: "Destination", accessor: "destination" },
  {
    header: "Departure Time",
    accessor: "departureTime",
    render: (value: string) => getFormattedTime(value),
  },
  {
    header: "Status",
    accessor: "status",
    render: (value: string) => {
      return <Chips value={value} classes={getStatusColor(value)} />;
    },
  },
];
