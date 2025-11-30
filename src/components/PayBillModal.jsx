import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const PayBillModal = ({ billData }) => {
    const { user } = useContext(AuthContext);
    

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const address = e.target.elements.address.value;
    const phone = e.target.elements.phone.value;
    const additionalInfo = e.target.elements.additionalInfo.value;

    const paymentData = {
      email: user?.email,
      billId: billData?._id,
      amount: billData?.amount,
      username,
      address,
      phone,
      date: new Date().toLocaleDateString(),
      additionalInfo,
    };

    console.log("Payment Data:", paymentData);

    // You can POST this to your server
    // fetch('/api/pay', { method: 'POST', body: JSON.stringify(paymentData) })

    // Close modal manually
    document.getElementById("pay_bill_modal").close();
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
                <span className="label-text">Email</span>
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
                <span className="label-text">Bill ID</span>
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
                <span className="label-text">Amount</span>
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
                <span className="label-text">Date</span>
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
                <span className="label-text">Username</span>
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
                <span className="label-text">Address</span>
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
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Additional Info</span>
              </label>
              <textarea
                name="additionalInfo"
                placeholder="Optional information"
                className="textarea textarea-bordered w-full"
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
