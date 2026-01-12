import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const UpdateProfileModal = () => {
  const { user, setUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.elements.userName.value;
    const photoUrl = e.target.elements.photoUrl.value;

    const userProfile = {
      displayName: userName,
      photoURL: photoUrl,
    };

    updateUserProfile(userProfile)
      .then(() => {
        setUser({ ...user, ...userProfile });
      })
      .then(() => {
        document.getElementById("update_profile_modal").close();
      });
  };

  return (
    <>
      <dialog
        id="update_profile_modal"
        className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update profile</h3>

          <form onSubmit={handleSubmit} className="space-y-3 mt-4">
            <div>
              <label className="label">
                <span className="label-text text-lg">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                defaultValue={user?.photoURL || ""}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">User name</span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName || ""}
                className="input input-bordered w-full"
              />
            </div>
            <div className="modal-action justify-end">
              <button type="submit" className="btn btn-primary">
                Update profile
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() =>
                  document.getElementById("update_profile_modal").close()
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

export default UpdateProfileModal;
