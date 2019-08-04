import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../actions";
const Contact = ({ id, contact, dispatch }) => (
  <div>
    <tr>
      <td>{id}</td>
      <td>{contact.name}</td>
      <td>{contact.contact}</td>
      <td>
        <a href="#" id={id} onClick={e=>{dispatch(deleteContact(id))}}>
          Delete
        </a>
      </td>
    </tr>
  </div>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired
  }).isRequired
};

export default connect()(Contact);
