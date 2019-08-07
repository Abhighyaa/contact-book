import { addContactFun, deleteContactFun } from "../apiCalls";

export const updateContacts = contacts => ({
  type: "Update_Contacts",
  contacts
});

export const fetchWithNewContact = contact => {
  return dispatch => {
    return addContactFun(contact).then(newContacts => {
      dispatch(updateContacts(newContacts));
    });
  };
};

export const fetchWithDeletedContact = contact => {
  return dispatch => {
    return deleteContactFun(contact).then(newContacts => {
      dispatch(updateContacts(newContacts));
    });
  };
};

export const fetchSortedContacts = () => ({
  type: "Fetch_Sorted_Contacts"
});

export const fetchSuggestions = (suggestionsFor, contacts) => ({
  type: "Fetch_Suggestions",
  suggestionsFor,
  contacts
});
