import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import PayBillsRow from "../components/PayBillsRow";
import UpdateBillModal from "../components/UpdateBillModal";
import Loading from "./Loading";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import toast from "react-hot-toast";

const MyPayBills = () => {
  const { user } = useContext(AuthContext);
  const [deleteBill, setDeleteBill] = useState(false);
  const [update, setUpdate] = useState(false);
  const [myBills, setMyBills] = useState([]);
  const [billData, setBillData] = useState({});
  console.log(myBills);

  useEffect(() => {
    fetch(`http://localhost:3000/my-pay-bills?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBills(data))
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);
      });
  }, [user.email, update, deleteBill]);

  if (!myBills) {
    return <Loading></Loading>;
  }

  const handleDownload = () => {
    if (myBills) {
      toast("Noting to download!! Please pay some bills.")
      return
    }

    const doc = new jsPDF();

    doc.text("My Paid Bills Report", 14, 15);

    autoTable(doc, {
      startY: 25,
      head: [
        [
          "No.",
          "Username",
          "Email",
          "Bill ID",
          "Amount (৳)",
          "Phone",
          "Address",
          "Date",
          "Additional Info",
        ],
      ],
      body: myBills?.map((bill, index) => [
        index + 1,
        bill.username,
        bill.email,
        bill.billId,
        bill.amount,
        bill.phone,
        bill.address,
        bill.date,
        bill.additionalInfo || "—",
      ]),
      theme: "grid",
      styles: { fontSize: 6 },
      headStyles: { fillColor: [41, 128, 185] },
    });

    doc.save("my-paid-bills.pdf");
  };

  return (
    <div className="max-w-[1440px] w-full  mx-auto my-20 p-2 lg:px-10">
      <title>My pay bills</title>
      <div className="p-6">
        {/* Summary Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">My Paid Bills</h2>

          <button onClick={handleDownload} className="btn btn-primary">
            Download Report
          </button>
        </div>

        <div className="bg-base-200 p-4 rounded-lg mb-6">
          <p className="text-lg font-semibold">
            Total Bills Paid:{" "}
            <span className="text-primary">{myBills.length}</span>
          </p>
          <p className="text-lg font-semibold">
            Total Amount Paid:{" "}
            <span className="text-primary">
              ৳ {myBills.reduce((acc, bill) => acc + Number(bill.amount), 0)}
            </span>
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {myBills.map((bill, index) => (
                <PayBillsRow
                  key={index}
                  bill={bill}
                  index={index}
                  deleteBill={deleteBill}
                  setDeleteBill={setDeleteBill}
                  setBillData={setBillData}></PayBillsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UpdateBillModal
        billData={billData}
        update={update}
        setUpdate={setUpdate}></UpdateBillModal>
    </div>
  );
};

export default MyPayBills;
