import React from "react";

const PayBillsRow = ({ bill, index, setBillData }) => {
  return (
    <>
      <tr key={bill._id}>
        <th>{index + 1}</th>
        <td>{bill.username}</td>
        <td>{bill.email}</td>
        <td>৳ {bill.amount}</td>
        <td>{bill.address}</td>
        <td>{bill.phone}</td>
        <td>{bill.date}</td>

        <td className="flex gap-2">
          <button
            className="btn btn-xs btn-info"
            onClick={() => {
              setBillData(bill);
              document.getElementById("update_bill_modal").showModal();
            }}>
            Update
          </button>

          <button
            className="btn btn-xs btn-error"
            //   onClick={() => handleDelete(bill._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default PayBillsRow;
