// import React from "react";

// interface ContactDetailsProps {
//   contact: {
//     id: number;
//     name: string;
//     email: string;
//     phone: string;
//   };
// }

// const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {
//   return (
//     <div>
//       <h2>Contact Details</h2>
//       <p>Name: {contact.name}</p>
//       <p>Email: {contact.email}</p>
//       <p>Phone: {contact.phone}</p>
//     </div>
//   );
// };

// export default ContactDetails;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../state/actions/contactActions";
import { Contact } from "../../Types";

interface ContactDetailsProps {
  contact: Contact;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState<Contact>(contact);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editContact(editedContact));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedContact(contact);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContact({
      ...editedContact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Contact Details</h2>
      {isEditing ? (
        <>
          <p>
            Name:
            <input
              type="text"
              name="name"
              value={editedContact.name}
              onChange={handleChange}
            />
          </p>
          <p>
            Email:
            <input
              type="text"
              name="email"
              value={editedContact.email}
              onChange={handleChange}
            />
          </p>
          <p>
            Phone:
            <input
              type="text"
              name="phone"
              value={editedContact.phone}
              onChange={handleChange}
            />
          </p>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={handleEdit}>Edit Contact</button>
        </>
      )}
    </div>
  );
};

export default ContactDetails;
