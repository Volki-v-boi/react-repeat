import { createAction } from "@reduxjs/toolkit";

// export const addContact = (newContact) => {
//   return {
//     type: "contacts/addContact",
//     payload: newContact,
//   };
// };

// export const deleteContact = (contactId) => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };

export const addContact = createAction("contacts/addContact");

export const deleteContact = createAction("contacts/deleteContact");
