import { useRouter } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useGetFlightByIdQuery } from "../../services/flights";
import FlightDetailCard from "@/components/flightDetailCard";

const FlightDetailPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data } = useGetFlightByIdQuery(
    { id },
    { skip: !id, pollingInterval: 5000 }
  );

  return (
    <div className="relative overflow-x-auto mx-6">
      <FlightDetailCard details={data} />
    </div>
  );
};

export default FlightDetailPage;
