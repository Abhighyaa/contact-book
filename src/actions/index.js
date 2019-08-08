import { addContactFun, deleteContactFun, editContactFun } from "../apiCalls";

export const updateContacts = contacts => ({
  type: "Update_Contacts",
  contacts
});

export const fetchWithNewContact = contact => {
  return dispatch => {
    return addContactFun(contact).then(newContacts => {
      dispatch(updateContacts(newContacts));
      dispatch(fetchSuggestions("",newContacts));
    });
  };
};

export const fetchWithDeletedContact = contact => {
  return dispatch => {
    return deleteContactFun(contact).then(newContacts => {
      dispatch(updateContacts(newContacts));
      var v=document.getElementById('name').value
      dispatch(fetchSuggestions(v,newContacts));
    });
  };
};

export const fetchWithEditedContact = (contact,editedContactObj) => {
  return dispatch => {
    return editContactFun(contact,editedContactObj).then(newContacts => {
      dispatch(updateContacts(newContacts));
      var v=document.getElementById('name').value
      dispatch(fetchSuggestions(v,newContacts));
    });
  };
};

// export const fetchSortedContacts = 
// () => ({
//   type: "Fetch_Sorted_Contacts"
// });

export const updateSortBy = (sortBy) => ({
  type: "Fetch_Sorted_Contacts",
  sortBy,
});

export const fetchSuggestions = (suggestionsFor, contacts) => ({
  type: "Fetch_Suggestions",
  suggestionsFor,
  contacts
});
