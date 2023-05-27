import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Welcome to the Contact Management App</h2>
      <p>
        This app allows you to manage your contacts, view charts with COVID-19
        data, and explore a map with country-specific statistics.
      </p>
      <div>
        <h3>Navigation</h3>
        <ul>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
