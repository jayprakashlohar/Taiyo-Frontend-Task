import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../../Types";
import { deleteContact, editContact } from "../../state/actions/contactActions";
import { RootState } from "../../state/store";
import { AiFillEdit, AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "@chakra-ui/react";

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
        <div className=" shadow-2xl ml-80 w-3/4 mt-10 p-2">
          <h2 className="text-center text-3xl font-semibold">Edit here</h2>
          <p className="mb-1 mt-2">
            Name:
            <input
              className=" border border-gray-400 ml-2 mb-2 mt-2"
              type="text"
              name="name"
              value={editedContact.name}
              onChange={handleChange}
            />
          </p>
          <p className="mb-1">
            Email:
            <input
              className="border border-gray-400 ml-2 mb-2"
              type="text"
              name="email"
              value={editedContact.email}
              onChange={handleChange}
            />
          </p>
          <p className="mb-1">
            Phone:
            <input
              className=" border border-gray-400 ml-2 mb-2"
              type="text"
              name="phone"
              value={editedContact.phone}
              onChange={handleChange}
            />
          </p>
          <Button colorScheme="green" onClick={handleSave}>
            Save
          </Button>
          <Button float="right" colorScheme="yellow" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      ) : (
        <div className="  ml-80 w-3/4 mt-10 shadow-2xl">
          <h2 className="text-center text-3xl font-semibold">Contact List</h2>
          {contacts.length === 0 ? (
            <p className="text-center text-3xl font-semibold">
              No contacts available
            </p>
          ) : (
            <div>
              {contacts.map((contact: Contact) => (
                <div
                  key={contact.id}
                  className=" justify-center items-center gap-10 shadow-inner  mt-2 p-2"
                >
                  <p className="mb-1">Name: {contact.name}</p>
                  <p className="mb-1">Email: {contact.email}</p>
                  <p className="mb-1">Phone: {contact.phone}</p>
                  <Button
                    float="right"
                    colorScheme="blue"
                    onClick={() => handleEdit(contact)}
                  >
                    Edit
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
