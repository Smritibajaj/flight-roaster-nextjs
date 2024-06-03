import React, { useEffect } from "react";
import { useGetFlightsQuery } from "../../services/flights";
import toast from "react-hot-toast";
import Table from "@/components/table";
import { useRouter } from "next/navigation";
import { columns } from "@/components/flightConfig";

const FlightPage = () => {
  const naviagte = useRouter();

  const { data } = useGetFlightsQuery(
    undefined,
    {
      pollingInterval: 50000,
    }
  );
  const handleRowClick = (rowData: any) => {
    naviagte.push(`/flights/${rowData.id}`);
  };
    

  return (
    <div className="relative overflow-x-auto mx-6">
      <Table columns={columns} data={data ?? []} onRowClick={handleRowClick} />
    </div>
  );
};

export default FlightPage;
