import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import UpdateProfileModal from "../components/UpdateProfileModal";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-[1440px] w-full  mx-auto my-20 p-2 lg:px-10">
      <title>Profile</title>
      <div className="flex flex-col justify-center items-center gap-3">
        <img
          className="max-w-40 w-full rounded-full"
          src={user.photoURL}
          alt=""
        />
        <p className="text-center text-xl text-gray-600">
          User name: {user.displayName}
        </p>
        <button
          onClick={() =>
            document.getElementById("update_profile_modal").showModal()
          }
          className="btn btn-primary">
          Update profile
        </button>
      </div>
      <UpdateProfileModal></UpdateProfileModal>
    </div>
  );
};

export default Profile;
