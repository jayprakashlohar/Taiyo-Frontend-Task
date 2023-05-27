import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="mt-10 text-center">
        <h3 className="text-3xl font-bold">Navigation</h3>
        <ul>
          <li className="mt-10">
            <Link
              to="/"
              className="text-3xl font-semibold text-blue-700 underline"
            >
              Contacts
            </Link>
          </li>
          <li className="mt-10">
            <Link
              to="/charts"
              className="text-3xl font-semibold text-blue-700 underline"
            >
              Charts
            </Link>
          </li>
          <li className="mt-10">
            <Link
              to="/map"
              className="text-3xl font-semibold text-blue-700 underline"
            >
              Map
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
