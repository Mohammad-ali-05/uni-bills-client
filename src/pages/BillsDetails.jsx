import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PayBillModal from "../components/PayBillModal";

const BillsDetails = () => {
  const [billData, setBillData] = useState({});
  const [disableBill, setDisableBill] = useState(false);
  const [billMessage, setBillMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/bill-details/${id}`)
      .then((res) => res.json())
      .then((data) => setBillData(data))
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }, [id]);

  useEffect(() => {
    if (!billData.date) return;

    const current = new Date();
    const billDate = new Date(billData.date);

    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth();
    const billYear = billDate.getFullYear();
    const billMonth = billDate.getMonth();

    if (billYear === currentYear && billMonth === currentMonth) {
      setDisableBill(false);
      setBillMessage("Pay bill");
    } else {
      setDisableBill(true);
      setBillMessage("Only Current month Bill can be paid");
    }
  }, [billData.date]);

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10">
        <div>
          <img
            src={billData.image}
            alt="Bill"
            className="w-full max-w-sm rounded-lg border mt-1"
          />
        </div>

        <h1 className="text-2xl font-semibold mb-6">Bill Details</h1>

        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-sm">Title</p>
            <p className="text-lg font-medium">{billData.title}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Category</p>
            <p className="text-lg font-medium">{billData.category}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Location</p>
            <p className="text-lg font-medium">{billData.location}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Description</p>
            <p className="text-lg">{billData.description}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Amount</p>
            <p className="text-xl font-semibold text-green-600">
              ৳ {billData.amount}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Date</p>
            <p className="text-lg font-medium">{billData.date}</p>
          </div>
        </div>

        <button
          onClick={() => {
            document.getElementById("pay_bill_modal").showModal();
          }}
          disabled={disableBill}
          className="btn btn-sm btn-outline btn-primary w-full">
          {billMessage}
        </button>
      </div>
      <PayBillModal billData={billData}></PayBillModal>
    </div>
  );
};

export default BillsDetails;
