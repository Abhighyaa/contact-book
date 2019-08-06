var localStorageContacts = [];
if (localStorage.getItem("contacts") != null) {
  localStorageContacts = JSON.parse(localStorage.getItem("contacts"))[
    "contacts"
  ];
}
const initialState = {
  contacts: localStorageContacts,
  contact: {},
  suggestions: []
};
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Update_Contacts":
      var sortBy = document.querySelector("#sortBy").value;
      if (sortBy.localeCompare("name") === 0) {
        action.contacts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sortBy.localeCompare("contacts") === 0) {
        action.contacts.sort((a, b) => {
          return a.contact - b.contact;
        });
      }
      return Object.assign({}, state, {
        contacts: action.contacts,
        suggestions: []
      });
    case "Fetch_Sorted_Contacts":
      var contacts = [...state.contacts];
      console.log(contacts);
      var sortBy = document.querySelector("#sortBy").value;
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
      return Object.assign({}, state, { contacts: contacts });
    case "Fetch_Suggestions":
      var suggestedNames = [];
      if (action.suggestionsFor != "") {
        state.contacts.forEach(contact => {
          if (contact.name.includes(action.suggestionsFor)) {
            suggestedNames.push(contact.name);
          }
        });
        document.querySelector("#suggestions").textContent = suggestedNames;
        return Object.assign({}, state, { suggestions: suggestedNames });
      } else {
        document.querySelector("#suggestions").textContent = "";
        return Object.assign({}, state, { suggestions: "" });
      }
    default:
      return state;
  }
};

export default contactsReducer;
