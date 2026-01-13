import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col gap-5 min-h-screen w-full bg-[url('/error-image.png')] bg-cover bg-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h3 className="text-5xl font-semibold text-white">Page not found</h3>
      <button
        onClick={()=> navigate("/")}
        className="px-6 py-1.5 text-white font-semibold border-2 border-blue-700 rounded-md hover:bg-blue-700">
        Go home
      </button>
    </div>
  );
};

export default ErrorPage404;
