import React from "react";
import Contact from "./Contact.js";
import store from "../store.js";

const ContactsTable = () => {
  const { contacts } = store.getState().contactsReducer;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, index) => {
            return (
              <Contact key={index + 1} id={index + 1} contact={c}></Contact>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
