export interface FlightDetail {
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departureTime: string;
    status: string;
}

export interface FlightDetailCardProps {
    details: FlightDetail | undefined;
}