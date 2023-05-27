import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../state/actions/contactActions";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
    };
    dispatch(addContact(newContact));
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <div className="border border-gray-500 p-4">
        {" "}
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label> <br />
            <input
              className="border border-gray-500"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label> <br />
            <input
              className="border border-gray-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label> <br />
            <input
              className="border border-gray-500"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <br />
          <button
            type="submit"
            className="rounded-none bg-emerald-500 text-white py-2 px-2"
          >
            Save Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
