import React, { useEffect, useState } from "react";
import BillsCard from "./BillsCard";
import Loading from "../pages/Loading";

const RecentBills = () => {
  const [billsData, setBillsData] = useState([]);
  
  useEffect(() => {
    fetch(`https://uni-bills-server.vercel.app/home`)
    .then((res) => res.json())
    .then((data) => setBillsData(data))
    .catch((error) => console.log(error.code, error.message));
  }, []);
  
  if (!billsData.length) {
    return <Loading></Loading>
  }

  return (
    <div className="max-w-[1440px] w-full  mx-auto my-20 p-2 lg:px-10">
      <title>Recent Bills bills</title>
      <div className="my-10">
        <h2 className="font-semibold text-5xl text-center">Recent bills</h2>
        <p className="text-center text-xl text-gray-500 mx-2 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-48 my-5">
          View the latest monthly utility bills at a glance. Track new charges,
          review details, and manage payments for all essential services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  rounded-xl gap-5 py-10 px-5">
        {billsData?.map((billData, index) => (
          <BillsCard key={index} billData={billData}></BillsCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBills;
