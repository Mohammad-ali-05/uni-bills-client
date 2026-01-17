import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const PayBillModal = ({ billData }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const address = e.target.elements.address.value;
    const phone = e.target.elements.phone.value;

    const paymentData = {
      email: user?.email,
      billId: billData?._id,
      amount: billData?.amount,
      username,
      address,
      phone,
      date: new Date().toLocaleDateString(),
    };

    // console.log("Payment Data:", paymentData);

    fetch("https://uni-bills-server.vercel.app/pay-bills", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Bill has been paid");
        e.target.reset();
        document.getElementById("pay_bill_modal").close();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <dialog
        id="pay_bill_modal"
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
                value={billData?._id || ""}
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
                value={billData?.amount || 0}
                readOnly
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
                placeholder="Enter your phone"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="modal-action justify-end">
              <button type="submit" className="btn btn-primary">
                Pay bill
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() =>
                  document.getElementById("pay_bill_modal").close()
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
