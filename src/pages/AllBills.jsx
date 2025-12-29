import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import BillsCard from "../components/BillsCard";
import Loading from "./Loading";
import { useLocation } from "react-router";

const AllBills = () => {
  const location = useLocation();
  const defaultCategory = location.state || "";
  const [billsData, setBillsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  useEffect(() => {
    fetch(
      `http://localhost:3000/bills${
        selectedCategory ? `?category=${selectedCategory}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setBillsData(data))
      .catch((error) => console.log(error.code, error.message));
  }, [selectedCategory]);

  if (!billsData) {
    return <Loading></Loading>;
  }

  // console.log(billsData);
  // console.log(selectedCategory);

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className="max-w-[1440px] w-full  mx-auto my-20 p-2 lg:px-10">
      <title>All bills</title>
      <div className="my-10">
        <h2 className="font-semibold text-5xl text-center">All bills</h2>
      </div>
      <div className="flex justify-between items-center my-2.5">
        <div></div>
        <div>
          <label
            htmlFor="category"
            className="block mb-1 font-medium text-gray-700">
            Filter by Category:
          </label>
          <select
            id="category"
            onChange={handleCategory}
            value={selectedCategory}
            className="select select-bordered w-full max-w-xs">
            <option value="">All Categories</option>
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Gas">Gas</option>
            <option value="Internet">Internet</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  rounded-xl gap-5 py-10 px-5">
        {billsData?.map((billData, index) => (
          <BillsCard key={index} billData={billData}></BillsCard>
        ))}
      </div>
    </section>
  );
};

export default AllBills;
