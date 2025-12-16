import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const PayBillModal = ({ billData, update, setUpdate }) => {
  console.log(billData);
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = e.target.elements.amount.value;
    const username = e.target.elements.username.value;
    const address = e.target.elements.address.value;
    const phone = e.target.elements.phone.value;
    const additionalInfo = e.target.elements.additionalInfo.value;

    const updateData = {
      email: user?.email,
      billId: billData?.billId,
      amount,
      username,
      address,
      phone,
      date: new Date().toLocaleDateString(),
      additionalInfo,
    };

    console.log("Payment Data:", updateData);

    fetch(`http://localhost:3000/update-bill/${billData._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Bill has been Updated");
        setUpdate(!update);
        e.target.reset();
        document.getElementById("update_bill_modal").close();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <dialog
        id="update_bill_modal"
        className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Pay Bill</h3>

          <form onSubmit={handleSubmit} className="space-y-3 mt-4">
            <div>
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-lg">Bill ID</span>
              </label>
              <input
                type="text"
                value={billData?.billId || ""}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-lg">Amount</span>
              </label>
              <input
                type="text"
                defaultValue={billData?.amount}
                name="amount"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-lg">Date</span>
              </label>
              <input
                type="text"
                value={new Date().toLocaleDateString()}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-lg">Username</span>
              </label>
              <input
                type="text"
                defaultValue={billData?.username || ""}
                name="username"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-lg">Address</span>
              </label>
              <input
                type="text"
                name="address"
                defaultValue={billData?.address || ""}
                placeholder="Enter your address"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-lg">Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                defaultValue={billData?.phone || ""}
                placeholder="Enter your phone"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-lg">Additional Info</span>
              </label>
              <textarea
                name="additionalInfo"
                placeholder="Optional information"
                className="textarea textarea-bordered w-full"
              />
            </div>

            <div className="modal-action justify-end">
              <button type="submit" className="btn btn-primary">
                Update bill
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() =>
                  document.getElementById("update_bill_modal").close()
                }>
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default PayBillModal;
