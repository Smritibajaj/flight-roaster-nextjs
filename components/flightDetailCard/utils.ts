import { format } from "date-fns";

// Function to determine the status color based on the flight status
export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "on time":
      return "bg-green-500";
    case "delayed":
      return "bg-red-500";
    case "boarding":
      return "bg-blue-500";
    case "departed":
      return "bg-gray-500";
    default:
      return "bg-gary-700";
  }
}

export function getFormattedTime(value: string): string {
  const date = new Date(value);
  return format(date, "yyyy-MM-dd HH:mm:ss");
}
