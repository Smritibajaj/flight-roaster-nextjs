import { format } from "date-fns";
import { FlightDetailCardProps } from "./types";

const FlightDetailCard: React.FC<FlightDetailCardProps> = ({ details }) => {
    return (
        <div className="rounded overflow-hidden border border-gray-100 shadow-lg bg-white m-4">
            {details && (
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        {details?.airline} - {details?.flightNumber}
                    </div>
                    <p className="text-gray-700 text-base">
                        <strong>Origin:</strong> {details?.origin}
                    </p>
                    <p className="text-gray-700 text-base">
                        <strong>Destination:</strong> {details?.destination}
                    </p>
                    <p className="text-gray-700 text-base">
                        <strong>Departure Time:</strong> {details?.departureTime ? format(new Date(details?.departureTime), "PPpp") : '-'}
                    </p>
                    <p
                        className={`text-base font-semibold ${getStatusColor(
                            details?.status
                        )}`}
                    >
                        <strong>Status:</strong> {details?.status}
                    </p>
                </div>
            )}
        </div>
    );
};

// Function to determine the status color based on the flight status
function getStatusColor(status: string) {
    switch (status.toLowerCase()) {
        case "on time":
            return "text-green-500";
        case "delayed":
            return "text-red-500";
        case "boarding":
            return "text-blue-500";
        case "departed":
            return "text-gray-500";
        default:
            return "text-gray-700";
    }
}

export default FlightDetailCard;
