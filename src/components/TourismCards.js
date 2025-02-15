import React from "react";
import { Link } from "react-router-dom";

const TourismCards = ({ center }) => {
  return (
    <Link to={`/states/${center.name}`} className="block">
      <div className="flex transform cursor-pointer items-center overflow-hidden rounded-lg bg-gray-200 shadow-lg transition hover:-translate-y-2.5 hover:scale-105 dark:bg-gray-900">
        <img
          src={center.imageUrl}
          alt={center.imageAlt}
          className="h-48 w-32 flex-shrink-0 object-cover"
        />
        <div className="px-5 py-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {center.name}
          </h3>
          <p className="mt-2 w-60 overflow-hidden overflow-ellipsis text-gray-600 dark:text-white">
            Address: {center.address}
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm font-semibold text-indigo-500 hover:text-indigo-400 dark:text-white"
            >
              Rating: {center.rating}
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourismCards;
