import React from "react";
import { connect } from "react-redux";
import { addContact, getContacts } from "../actions";

const Menu = ({ contacts, dispatch }) => {
  return (
    <div>
      Name : <input type="text" id="name" />
      Contact : <input type="text" id="contact" />
      <button
        id="add"
        onClick={e => {
          var c = {
            name: document.getElementById("name").value,
            contact: document.getElementById("contact").value
          };
          dispatch(addContact(c));
          document.getElementById("name").value = "";
          document.getElementById("contact").value = "";
        }}
      >
        Add{" "}
      </button>
      <select
        id="sortBy"
        onChange={e => {
          dispatch(getContacts());
        }}
      >
        <option value="" selected disabled="true">
          Sort by
        </option>
        <option value="name">Name</option>
        <option value="contacts">Contacts</option>
      </select>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    contacts: state.contactsReducer.contacts
  };
};
export default connect(mapStateToProps)(Menu);
