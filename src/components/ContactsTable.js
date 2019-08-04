import React from "react";
import Contact from "./Contact.js";
import PropTypes from 'prop-types';

const ContactsTable = ({contacts}) => 
  (
    <div>
      <table>
        <thead>
          <td>S.No</td>
          <td>Name</td>
          <td>Contact</td>
          <td>Action</td>
        </thead>
        { contacts.map((c, index) => {
          return <Contact id={index + 1} contact={c}></Contact>;
        }) }
      </table>
    </div>
  )
  ContactsTable.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
  }

export default ContactsTable;
