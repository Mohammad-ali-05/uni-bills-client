import React from "react";
import Swal from "sweetalert2";

const PayBillsRow = ({
  bill,
  index,
  setBillData,
  deleteBill,
  setDeleteBill,
}) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://uni-bills-server.vercel.app/delete-bill/${bill._id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setDeleteBill(!deleteBill);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            console.log(data);
          })
          .catch((error) => console.log(error.message));
      }
    });
  };

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

          <button className="btn btn-xs btn-error" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default PayBillsRow;
