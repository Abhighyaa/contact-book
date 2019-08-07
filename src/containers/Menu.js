import React from "react";
import { connect } from "react-redux";
import { addContactFun } from "../apiCalls";
import store from "../store";
import {
  fetchWithNewContact,
  fetchSortedContacts,
  fetchSuggestions,
  updateContacts
} from "../actions";

// PureComponent > Functional Components > Stateful React Components
// Read into Arrow functions vs bind functions in React

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.addOnClickHandler = this.addOnClickHandler.bind(this);
    this.fetchSuggestions = this.fetchSuggestions.bind(this);
  }
  fetchSuggestions(val) {
    let timer;
    const delayFun = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        {
          // Refactor
          // why is this a problem ?
          // why DOM operations inside React is an issue
          // var value = document.getElementById("name").value;
          const { contacts } = store.getState().contactsReducer;
          this.props.dispatch(fetchSuggestions(val, contacts));
        }
      }, 300);
    };
    delayFun();
  }

  addOnClickHandler() {
    var c = {
      name: document.getElementById("name").value,
      contact: document.getElementById("contact").value
    };
    // addContactFun(c).then(newContacts => {
    //   this.props.dispatch(updateContacts(newContacts));
    // });
    this.props.dispatch(fetchWithNewContact(c));
  }
  render() {
    return (
      <div>
        Name :{" "}
        <input
          type="text"
          id="name"
          onKeyUp={e => this.fetchSuggestions(e.target.value)}
        />
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
