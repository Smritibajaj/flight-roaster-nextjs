import React, { useEffect } from "react";
import { useGetFlightsQuery } from "../../services/flights";
import toast from "react-hot-toast";

const FlightPage = () => {
  const { data, isLoading, isError, isSuccess } = useGetFlightsQuery();
  console.log(data);
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
  return (
    <div>
      <header className="mx-auto container my-6">
        <h1 className="text-2xl text-center">Flight Roaster</h1>
      </header>
      <div className="container mx-auto">
        <div className="relative overflow-x-auto">
          
        </div>
      </div>
    </div>
  );
};

export default FlightPage;
