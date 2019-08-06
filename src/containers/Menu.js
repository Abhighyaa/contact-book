import React from "react";
import { connect } from "react-redux";
import { fetchWithNewContact, fetchSortedContacts } from "../actions";

const Menu = ({ dispatch }) => {
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
          dispatch(fetchWithNewContact(c));
        }}
      >
        Add{" "}
      </button>
      <select
        id="sortBy"
        onChange={e => {
          dispatch(fetchSortedContacts());
        }}
      >
        <option value="" default disabled>
          Sort by
        </option>
        <option value="name">Name</option>
        <option value="contacts">Contacts</option>
      </select>
    </div>
  );
};

export default connect()(Menu);
