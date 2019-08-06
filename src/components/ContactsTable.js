import React from "react";
import Contact from "./Contact.js";
// import PropTypes from "prop-types";
var parsedContacts = [];
const ContactsTable = ({ contacts }) => (
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
          return <Contact key={index + 1} id={index + 1} contact={c}></Contact>;
        })}
      </tbody>
    </table>
  </div>
);

export default ContactsTable;
