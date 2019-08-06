import React from "react";
import { connect } from "react-redux";
import { fetchWithDeletedContact } from "../actions";

const Contact = ({ id, contact, dispatch }) => (
  <tr>
    <td>{id}</td>
    <td>{contact[1]}</td>
    <td>{contact[0]}</td>
    <td>
      <a
        href="#"
        id={contact[0]}
        onClick={e => {
          dispatch(fetchWithDeletedContact(contact[0]));
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default connect()(Contact);
