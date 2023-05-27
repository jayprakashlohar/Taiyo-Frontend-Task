// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteContact, editContact } from "../../state/actions/contactActions";
// import { RootState } from "../../state/store";
// import { Contact } from "../../Types";

// const ContactList: React.FC = () => {
//   const contacts: Contact[] = useSelector(
//     (state: RootState) => state.contact.contacts
//   );
//   const dispatch = useDispatch();

//   const handleDelete = (contactId: number) => {
//     dispatch(deleteContact(contactId));
//   };

//   const handleEdit = (contact: Contact) => {
//     // Implement the edit functionality
//     // You can use a modal or a separate page to edit the contact details
//     // Dispatch the editContact action with the updated contact object
//     // Example: dispatch(editContact(updatedContact));
//   };

//   return (
//     <div>
//       <h2>Contact List</h2>
//       {contacts.length === 0 ? (
//         <p>No contacts available</p>
//       ) : (
//         <ul>
//           {contacts.map((contact) => (
//             <li key={contact.id}>
//               <p>Name: {contact.name}</p>
//               <p>Email: {contact.email}</p>
//               <p>Phone: {contact.phone}</p>
//               <button onClick={() => handleDelete(contact.id)}>
//                 Delete Contact
//               </button>
//               <button onClick={() => handleEdit(contact)}>Edit Contact</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ContactList;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../state/actions/contactActions";
import { RootState } from "../../state/store";
import { Contact } from "../../Types";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const dispatch = useDispatch();

  const handleDelete = (contactId: number) => {
    dispatch(deleteContact(contactId));
  };

  return (
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
