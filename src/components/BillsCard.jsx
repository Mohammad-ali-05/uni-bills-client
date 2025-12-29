import React from "react";
import { Link } from "react-router";

const BillsCard = ({ billData }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-lg h-full border border-gray-300 mx-auto hover:shadow-lg p-2 transform transition duration-300 ease-in-out hover:scale-103">
        {/* Image */}
        <figure className="rounded-xl overflow-hidden h-48">
          <img
            src={billData.image}
            alt={billData.title}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body space-y-2">
          {/* Title */}
          <h2 className="card-title text-xl font-semibold">{billData.title}</h2>

          {/* Category */}
          <div className="badge badge-secondary px-3 py-2 text-sm">
            {billData.category}
          </div>

          {/* Location */}
          <p className="text-sm text-gray-500">📍 {billData.location}</p>

          {/* Amount */}
          <p className="text-lg font-bold text-teal-600">৳ {billData.amount}</p>

          {/* Button */}
          <div className="card-actions justify-between mt-3">
            <p className="text-gray-500">📅 {new Date(billData.date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <Link to={`/bills-details/${billData._id}`}>
              <button className="btn btn-sm btn-outline btn-primary">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsCard;
