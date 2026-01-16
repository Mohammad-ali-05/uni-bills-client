import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const ForgetPasswordModal = ({ email }) => {
  const { sendResetEmail } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.elements.email.value;
    console.log(userEmail);

    sendResetEmail(userEmail)
      .then(() => {
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else if (errorCode === "auth/too-many-requests") {
          toast.error("Too many attempts. Try again later.");
        } else {
          toast.error("Something went wrong. Try again.");
        }
      });
  };
  return (
    <div>
      <dialog
        id="forget_password_modal"
        className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Bill</h3>

          <form onSubmit={handleSubmit} className="space-y-3 mt-4">
            <div>
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email || ""}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="modal-action justify-end">
              <button type="submit" className="btn btn-primary">
                Change password
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() =>
                  document.getElementById("forget_password_modal").close()
                }>
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ForgetPasswordModal;
