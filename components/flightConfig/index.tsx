import { format } from "date-fns";
export const columns = [
    { header: "Flight Number", accessor: "flightNumber", sortable: true },
    { header: "Airline", accessor: "airline" },
    { header: "Origin", accessor: "origin" },
    { header: "Destination", accessor: "destination" },
    {
      header: "Departure Time",
      accessor: "departureTime",
      render: (value: string) => format(new Date(value), "PPpp"),
    },
    {
      header: "Status",
      accessor: "status",
      render: (value: string) => {
        let bgColor = "bg-red-500";
        if (value === "On Time") bgColor = "bg-green-500";
        else if (value === "Delayed") bgColor = "bg-yellow-500";
        else if (value === "Boarding") bgColor = "bg-blue-500";
        else if (value === "Departed") bgColor = "bg-gray-500";
  
        return (
          <div className={`p-1 ${bgColor} text-white text-center rounded`}>{value}</div>
        );
      },
    },
  ];