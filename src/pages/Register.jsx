import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";

const Register = () => {
  const { setUser, createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(location)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const photoUrl = e.target.elements.photoUrl.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    console.log(name, photoUrl, email, password);
    const userProfile = {
      displayName: name,
      photoURL: photoUrl,
    };

    if (errorMessage) {
      return;
    }

    createUser(email, password)
      .then(async (result) => {
        await updateUserProfile(userProfile);
        setUser({ ...result.user, ...userProfile });
        navigate(location.state ? location.state : "/");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);

        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMessage(
            `An account already exist with this "${email}" email.`
          );
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const handlePasswordOnChange = (e) => {
    const password = e.target.value;

    /* Checking if password filed is empty */
    if (!password) {
      setErrorMessage("");
      return;
    }

    /* Regex for no space, at lease one uppercase, lowercase, number, special character and a minimum length of 8 characters */
    if (!/^\S+$/.test(password)) {
      setErrorMessage("Password must not contain any space.");
    } else if (!/(?=.*[a-z])/.test(password)) {
      setErrorMessage(
        "Password must contain at least one lowercase character (a-z)."
      );
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase character (A-Z)."
      );
    } else if (!/(?=.*\d)/.test(password)) {
      setErrorMessage("Password must contain one number (0-9).");
    } else if (!/(?=.*[!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>\/?])/.test(password)) {
      setErrorMessage(
        "Password must contain one special character !@#$%... etc."
      );
    } else if (!/^.{8,}$/.test(password)) {
      setErrorMessage("Password mast be 8 character long.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <title>Register</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-semibold">Register now!</h1>
            <p className="text-xl text-gray-600 max-w-lg w-full py-6">
              Create your account to securely manage all your utility bills in
              one place, view payment history, and enjoy a simplified online
              billing experience.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Enter your name"
                    required
                  />
                  {/* Photo Url */}
                  <label className="label">Photo Url</label>
                  <input
                    type="text"
                    name="photoUrl"
                    className="input"
                    placeholder="Enter your photo url"
                    required
                  />
                  {/* Email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Enter your email"
                    required
                  />
                  {/* Password */}
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      onChange={handlePasswordOnChange}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Enter your password"
                      required
                    />
                    <p
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-3.5 right-7 z-10 text-sm">
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </p>
                  </div>
                  <div className="text-red-600">
                    {errorMessage && <p>{errorMessage}</p>}
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
              <p>
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="hover:text-blue-500 hover:underline">
                  login
                </Link>
                .
              </p>
              <div>
                <div className="flex items-center">
                  <div className="h-px bg-gray-700 w-full"></div>
                  <div className="px-2 font-semibold">Or</div>
                  <div className="h-px bg-gray-700 w-full"></div>
                </div>
                <button
                  onClick={handleGoogleLogin}
                  className="btn w-full bg-white text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
