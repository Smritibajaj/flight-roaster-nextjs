import Chips from "../chips";
import LabelValue from "../keyValue";
import { FlightDetailCardProps, IKey } from "./types";
import { getFormattedTime, getStatusColor } from "./utils";

const FlightDetailCard: React.FC<FlightDetailCardProps> = ({ details }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-4">
      {details && (
        <div className="px-6 py-4">
          <h4>
            {details?.airline} - {details?.flightNumber}
          </h4>
          <LabelValue label={"Origin:"} value={details?.origin} />
          <LabelValue label={"Destination:"} value={details?.destination} />
          <LabelValue
            label={"Departure Time:"}
            value={getFormattedTime(details?.departureTime)}
          />
          <div className="w-40 my-4">
            <Chips
              classes={getStatusColor(details?.status)}
              value={details?.status}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightDetailCard;
