import { addContactFun, deleteContactFun } from "../apiCalls";

export const updateContacts = contacts => ({
  type: "Update_Contacts",
  contacts: contacts
});

export const fetchWithNewContact = contact => {
  return dispatch => {
    return addContactFun(contact).then(newContacts => {
      console.info(newContacts);
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
// export const fetchContactsForSuggestions = suggestionsFor => {
//   return dispatch => {
//     fetchSortedContacts.then(allContacts => {
//       dispatch(fetchSuggestions(allContacts,suggestionsFor));
//     });
//   };
// }
export const fetchSuggestions = suggestionsFor => ({
  type: "Fetch_Suggestions",
  suggestionsFor: suggestionsFor
});
