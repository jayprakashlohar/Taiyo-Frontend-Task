import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../../Types";
import { deleteContact, editContact } from "../../state/actions/contactActions";
import { RootState } from "../../state/store";

const ContactDetails: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const [editedContact, setEditedContact] = useState<Contact>(
    contacts.length > 0 ? contacts[0] : ({} as Contact)
  );

  const dispatch = useDispatch();

  const handleEdit = (contact: Contact) => {
    setIsEditing(true);
    setEditedContact(contact);
  };

  const handleSave = () => {
    dispatch(editContact(editedContact));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedContact(contacts.length > 0 ? contacts[0] : ({} as Contact));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContact({
      ...editedContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (contactId: number) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
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
        <div>
          <h2>Contact List</h2>
          {contacts.length === 0 ? (
            <p>No contacts available</p>
          ) : (
            <ul>
              {contacts.map((contact: Contact) => (
                <li key={contact.id}>
                  <p>Name: {contact.name}</p>
                  <p>Email: {contact.email}</p>
                  <p>Phone: {contact.phone}</p>
                  <button onClick={() => handleDelete(contact.id)}>
                    Delete Contact
                  </button>

                  <button onClick={() => handleEdit(contact)}>
                    Edit Contact
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactDetails;

