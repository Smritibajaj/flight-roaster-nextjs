import { useRouter } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useGetFlightByIdQuery } from "../../services/flights";

const FlightDetailPage = () => {
  const router = useRouter();
  const id = router.query.id;
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
  return <p>Post: {router.query.id}</p>;
};

export default FlightDetailPage;
