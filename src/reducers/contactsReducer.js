var localStorageContacts = [];
if (localStorage.getItem("contacts") != null) {
  localStorageContacts = JSON.parse(localStorage.getItem("contacts"))[
    "contacts"
  ];
}
const initialState = {
  contacts: localStorageContacts,
  sortBy: ""
  // not sure if we need this !?
  // contact: {},
  // suggestions: []
};

/**
 * Webpack, Babel, Eslint
 * refs in React
 */
const contactsReducer = (state = initialState, action) => {
  const updatingContacts = (contacts, sortBy) => {
    if (sortBy.localeCompare("name") === 0) {
      contacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sortBy.localeCompare("contacts") === 0) {
      contacts.sort((a, b) => {
        return a.contact - b.contact;
      });
    }
    return contacts;
  };
  switch (action.type) {
    case "Update_Contacts":
      // ?!
      console.log(action.contacts);
      var sortBy = state.sortBy;
      console.log(sortBy);
      action.contacts = updatingContacts(action.contacts, sortBy);
      return Object.assign({}, state, {
        contacts: action.contacts,
        suggestions: []
      });

    case "Fetch_Sorted_Contacts":
      var contacts = [...state.contacts];
      var sortBy = action.sortBy;
      // var sortBy = document.querySelector("#sortBy").value;
      contacts = updatingContacts(contacts, sortBy);
      return Object.assign({}, state, { contacts, sortBy });
    // case "Fetch_Suggestions":
    //   var suggestedNames = [];
    //   if (action.suggestionsFor != "") {
    //     state.contacts.forEach(contact => {
    //       if (contact.name.includes(action.suggestionsFor)) {
    //         suggestedNames.push(contact.name);
    //       }
    //     });
    //     document.querySelector("#suggestions").textContent = suggestedNames;
    //     return Object.assign({}, state, { suggestions: suggestedNames });
    //   } else {
    //     document.querySelector("#suggestions").textContent = "";
    //     return Object.assign({}, state, { suggestions: "" });
    //   }
    default:
      return state;
  }
};

export default contactsReducer;
