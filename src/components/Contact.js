import React from "react";
import { connect } from "react-redux";
import { fetchWithDeletedContact } from "../actions";

const Contact = ({ id, contact, dispatch }) => (
  <tr>
    <td>{id}</td>
    <td>{contact.name}</td>
    <td>{contact.contact}</td>
    <td>
      <a
        href="#"
        id={contact.contact}
        onClick={e => {
          dispatch(fetchWithDeletedContact(contact.contact));
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

// mapStateToProps, mapDispatchToProps
export default connect()(Contact);
