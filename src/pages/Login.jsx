import React, { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import AuthContext from "../contexts/AuthContext";
import { Link, useLocation } from "react-router";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(location)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      
      loginUser(email, password).then((result) => {
          console.log(result)
      }).catch((error) =>{
          console.log(error.message)
          if (error.message === "Firebase: Error (auth/invalid-credential).") {
              setErrorMessage("Invalid email or password")
          }
      })
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
              <p>Don't have an account? <Link to={"/register"} className="hover:text-blue-500 hover:underline">register</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
