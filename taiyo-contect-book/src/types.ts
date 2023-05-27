export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export type ContactAction =
  | {
      type: "ADD_CONTACT";
      payload: Contact;
    }
  | {
      type: "DELETE_CONTACT";
      payload: number;
    }
  | {
      type: "EDIT_CONTACT";
      payload: Contact;
    };
