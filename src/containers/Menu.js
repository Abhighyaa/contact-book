import React from "react";
import { connect } from "react-redux";
import {
  fetchWithNewContact,
  fetchSortedContacts,
  fetchSuggestions
} from "../actions";

// PureComponent > Functional Components > Stateful React Components
// Read into Arrow functions vs bind functions in React

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.addOnClickHandler = this.addOnClickHandler.bind(this);
    this.fetchSuggestions = this.fetchSuggestions.bind(this);
  }
  fetchSuggestions() {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        {
          var value = document.getElementById("name").value;
          this.props.dispatch(fetchSuggestions(value));
          // this.dispatchFetchSuggestions.apply();
        }
      }, 300);
    };
  }

  addOnClickHandler() {
    var c = {
      name: document.getElementById("name").value,
      contact: document.getElementById("contact").value
    };
    console.info(this);
    this.props.dispatch(fetchWithNewContact(c));
  }
  render() {
    return (
      <div>
        Name :{" "}
        <input type="text" id="name" onKeyUp={this.fetchSuggestions()} />
        {/* <datalist id="datalist"></datalist> */}
        Contact : <input type="text" id="contact" />
        <button id="add" onClick={this.addOnClickHandler}>
          Add{" "}
        </button>
        <select
          id="sortBy"
          onChange={e => this.props.dispatch(fetchSortedContacts())}
        >
          <option value="" selected={true} disabled>
            Sort by
          </option>
          <option value="name">Name</option>
          <option value="contacts">Contacts</option>
        </select>
      </div>
    );
  }
}


export default connect()(Menu);
