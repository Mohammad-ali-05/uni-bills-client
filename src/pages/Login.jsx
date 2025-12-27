import React, { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import AuthContext from "../contexts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { setUser, loginUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    loginUser(email, password)
      .then((result) => {
        navigate(location.state ? location.state : "/")
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setErrorMessage("Invalid email or password");
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div>
      <title>Login</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-semibold">Login now!</h1>
            <p className="text-xl text-gray-600 max-w-lg w-full py-6">
              Login to securely access your account, manage your monthly utility
              bills, track payments, and stay updated with your billing
              information.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  {/* Email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Enter your email"
                  />
                  {/* Password */}
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Enter your password"
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
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p>
                Don't have an account?{" "}
                <Link
                  state={location.state}
                  to={"/register"}
                  className="hover:text-blue-500 hover:underline">
                  register
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

export default Login;
