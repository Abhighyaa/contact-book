const initialState = {
  contacts: [],
  contact: {}
};
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Contact":
      return Object.assign({}, state, {
        contacts: [...state.contacts, action.contact]
      });

    case "Delete_Contact":
      var allContacts = [...state.contacts];
      return Object.assign({}, state, {
        contacts: allContacts
          .slice(0, action.id - 1)
          .concat(allContacts.slice(action.id, state.contacts.length))
      });

    case "Get_Contacts":
      var contacts = [...state.contacts];
      var sortBy = document.querySelector("#sortBy").value;
      if (sortBy.localeCompare("name") == 0) {
        contacts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sortBy.localeCompare("contacts") == 0) {
        contacts.sort((a, b) => {
          return a.contact - b.contact;
        });
      }
      return Object.assign({}, state, {
        contacts: contacts
      });
  }
  return state;
};

export default contactsReducer;
