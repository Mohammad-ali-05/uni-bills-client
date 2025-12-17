import React from "react";
import { Link } from "react-router";

const BillsCard = ({billData}) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-lg h-full mx-auto hover:shadow-lg transition p-2">
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
          <div className="card-actions justify-end mt-3">
            <Link to={`/bills-details/${billData._id}`}><button className="btn btn-sm btn-outline btn-primary">
              See Details
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsCard;
