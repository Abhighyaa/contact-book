var localStorageContacts=[]
var localStorageContactsArray=[]
// var parsedLocalStorageContacts=[]
if(localStorage.getItem("contacts")!=null){
  localStorageContacts = JSON.parse(localStorage.getItem("contacts"));
  localStorageContactsArray = Object.keys(localStorageContacts).map(function(contact) {
    return [Number(contact), localStorageContacts[contact]];
  });
}
  const initialState = {
  contacts: localStorageContactsArray,
  contact: {}
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Update_Contacts":
        var contactsArray = Object.keys(action.contacts).map(function(contact) {
          return [Number(contact), [contact]];
        });
        console.info(contactsArray)
      return Object.assign({}, state, { contacts: contactsArray });

    case "Fetch_Sorted_Contacts":
      contacts = [...state.contacts];
      var sortBy = document.querySelector("#sortBy").value;
      var contacts = Object.entries(localStorage);
      if (sortBy.localeCompare("name") === 0) {
        contacts.sort((a, b) => {
          return a[1].localeCompare(b[1]);
        });
      }
      if (sortBy.localeCompare("contacts") === 0) {
        contacts.sort((a, b) => {
          return a[0] - b[0];
        });
      }
      return Object.assign({}, state, { contacts: contacts });
    default:
      return state;
  }
};

export default contactsReducer;
