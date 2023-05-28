// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteContact } from "../../state/actions/contactActions";
// import { RootState } from "../../state/store";
// import { Contact } from "../../Types";

// const ContactList: React.FC = () => {
//   const contacts = useSelector((state: RootState) => state.contact.contacts);
//   const dispatch = useDispatch();

//   const handleDelete = (contactId: number) => {
//     dispatch(deleteContact(contactId));
//   };



//   return (
//     <div>
//       <h2>Contact List</h2>
//       {contacts.length === 0 ? (
//         <p>No contacts available</p>
//       ) : (
//         <ul>
//           {contacts.map((contact: Contact) => (
//             <li key={contact.id}>
//               <p>Name: {contact.name}</p>
//               <p>Email: {contact.email}</p>
//               <p>Phone: {contact.phone}</p>
//               <button onClick={() => handleDelete(contact.id)}>
//                 Delete Contact
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ContactList;
