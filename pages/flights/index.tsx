import React, { useEffect } from "react";
import { useGetFlightsQuery } from "../../services/flights";
import toast from "react-hot-toast";
import Table from "@/components/table";
import { useRouter } from "next/navigation";
import { columns } from "@/components/flightConfig";

const FlightPage = () => {
  const naviagte = useRouter();

  const { data, isLoading, isError, isSuccess } = useGetFlightsQuery(
    undefined,
    {
      pollingInterval: 50000,
    }
  );
  const handleRowClick = (rowData: any) => {
    naviagte.push(`/flights/${rowData.id}`);
  };

  useEffect(() => {
    let toastId;
    if (isLoading) {
      toastId = toast.loading("We are connecting with our flight partner.");
    } else if (isSuccess) {
      toast.dismiss(toastId);
      toast.success("Your Flight data is here checkout your result.");
    } else if (isError) {
      toast.dismiss(toastId);
      toast.error(
        "There is some delay in getting response from the Airline kindly try after some time."
      );
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div>
      <div className="container mx-auto my-24">
        <div className="relative overflow-x-auto mx-6">
          <Table
            columns={columns}
            data={data ?? []}
            onRowClick={handleRowClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightPage;
