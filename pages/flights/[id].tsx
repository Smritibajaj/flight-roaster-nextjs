import { useRouter } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useGetFlightByIdQuery } from "../../services/flights";
import FlightDetailCard from "@/components/flightDetailCard";

const FlightDetailPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, isLoading, isSuccess, isError } = useGetFlightByIdQuery(
    { id },
    { skip: !id, pollingInterval: 5000 }
  );

  useEffect(() => {
    let toastId;
    if (isLoading) {
      toastId = toast.loading("We are connecting with our flight partner");
    } else if (isSuccess) {
      toast.dismiss(toastId);
      toast.success("Your Flight");
    } else if (isError) {
      toast.dismiss(toastId);
      toast.error(
        "There is some delay in getting response from the Airline kindly try after some time"
      );
    }
  }, [isLoading, isSuccess, isError]);
  console.log(data);
  return (
    <div>
      <div className="container mx-auto my-24">
        <div className="relative overflow-x-auto mx-6">
          <FlightDetailCard details={data} />
        </div>
      </div>
    </div>
  );
};

export default FlightDetailPage;
