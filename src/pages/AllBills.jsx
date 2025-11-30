import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import BillsCard from "../components/BillsCard";

const AllBills = () => {
  const [billsData, setBillsData] = useState();
  console.log(billsData);

  useEffect(() => {
    fetch("http://localhost:3000/bills")
      .then((res) => res.json())
      .then((data) => setBillsData(data))
      .catch((error) => console.log(error.code, error.message));
  }, []);

  return (
    <section className="max-w-[1440px] w-full  mx-auto my-20 p-2 lg:px-10">
      <div className="my-10">
        <h2 className="font-semibold text-5xl text-center">All bills</h2>
      </div>
      <div className="grid grid-cols-3 bg-gray-300 rounded-xl gap-5 py-10 px-5">
        {billsData?.map((billData, index) => (
          <BillsCard key={index} billData={billData}></BillsCard>
        ))}
      </div>
    </section>
  );
};

export default AllBills;
