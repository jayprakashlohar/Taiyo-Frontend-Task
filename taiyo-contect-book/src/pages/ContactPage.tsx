import React from "react";
import HomePage from "./HomePage";

const ContactPage: React.FC = () => {
  return (
    <div>
      <div className=" text-center py-2 bg-blue-500 text-3xl font-semibold text-white">
        Contact Page
      </div>
      <div className="flex border border-gray-400 h-screen ">
        <div className="border border-gray-600 w-1/6">
          <HomePage />
        </div>
        <div >
          <button className="rounded-none bg-emerald-500 text-white py-2 px-2 ml-96 mt-10">
            Create Contact
          </button>
          {/* ContactList */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
