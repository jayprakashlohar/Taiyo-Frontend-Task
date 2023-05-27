import { Contact } from "../../Types";

export const addContact = (contact: Contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  } as const;
};

export const deleteContact = (contactId: number) => {
  return {
    type: "DELETE_CONTACT",
    payload: contactId,
  } as const;
};

export const editContact = (contact: Contact) => {
  return {
    type: "EDIT_CONTACT",
    payload: contact,
  } as const;
};
