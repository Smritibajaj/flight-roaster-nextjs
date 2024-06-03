import React from "react";
import { render, screen } from "@testing-library/react";
import FlightDetailCard from "./index";
import { FlightDetailCardProps } from "./types";

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

describe("FlightDetailCard", () => {
  beforeEach(() => {
    render(<FlightDetailCard details={flightDetails.details} />);
  });

  it("displays the flight number and airline correctly", () => {
    expect(screen.getByText("Example Airline - EX123")).toBeInTheDocument();
  });

  it("displays the origin correctly", () => {
    expect(screen.getByText("City A")).toBeInTheDocument();
  });

  it("displays the destination correctly", () => {
    expect(screen.getByText("City B")).toBeInTheDocument();
  });

  it("displays the departure time correctly", () => {
    expect(screen.getByText("Departure Time:")).toBeInTheDocument();
  });

  it("displays the status correctly", () => {
    expect(screen.getByText("on time")).toBeInTheDocument();
  });
});
