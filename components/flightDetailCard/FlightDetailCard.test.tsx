// Import necessary libraries and dependencies
import React from "react";
import { render, screen } from "@testing-library/react";
import FlightDetailCard from "./index"; // Ensure the correct path is set
import { FlightDetailCardProps } from "./types"; // Ensure the path is accurate and use a more descriptive name

// Define the props structure directly based on the expected component props
const flightDetails: FlightDetailCardProps = {
  details: {
    airline: "Example Airline",

    flightNumber: "EX123",
    origin: "City A",
    destination: "City B",
    departureTime: "10:00 AM",
    status: "on time",
  },
};

// Describe block to group related tests for the FlightDetailCard component
describe("FlightDetailCard", () => {
  beforeEach(() => {
    // Render the component before each test to ensure a clean slate
    render(<FlightDetailCard details={flightDetails.details} />);
  });

  it("displays the flight number and airline correctly", () => {
    // Verifies that the component renders both the airline name and the flight number within the same text content
    expect(screen.getByText("Example Airline - EX123")).toBeInTheDocument();
  });

  it("displays the origin correctly", () => {
    // Utilizes regular expressions to account for potential flexible text formatting
    expect(screen.getByText('City A')).toBeInTheDocument();
  });

  it("displays the destination correctly", () => {
    // Verifies that the text "Destination: City B" is present in the document
    expect(screen.getByText("City B")).toBeInTheDocument();
  });

  it("displays the departure time correctly", () => {
    // Checks for exact matching to ensure that the specific time "10:00 AM" is displayed accurately
    expect(screen.getByText("Departure Time:")).toBeInTheDocument();
  });

  it("displays the status correctly", () => {
    // Uses a regex for case-insensitive and whitespace-flexible matching to verify the flight status
    expect(screen.getByText('on time')).toBeInTheDocument();
  });
});
