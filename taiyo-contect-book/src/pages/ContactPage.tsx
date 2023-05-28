import React from "react";
import HomePage from "./HomePage";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactDetails from "../components/ContactDetails/ContactDetails";

const ContactPage: React.FC = () => {
  return (
    <div>
      <div className=" text-center py-2 bg-blue-500 text-3xl font-semibold text-white flex justify-between ">
        <p>Contact Page</p>
        <ContactForm />
      </div>
      <div className="flex border border-gray-400 h-screen ">
        <div className="border border-gray-600 w-1/6">
          <HomePage />
        </div>
        <div>
          <ContactDetails/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
