import { addContactFun, deleteContactFun } from "../apiCalls";

export const updateContacts = contacts => ({
  type: "Update_Contacts",
  contacts: contacts
});

export const fetchWithNewContact = contact => {
  return dispatch => {
    return addContactFun(contact).then(newContacts => {
      dispatch(updateContacts(newContacts));
    });
  };
};
export const fetchWithDeletedContact = id => {
  return dispatch => {
    return deleteContactFun(id).then(newContacts => {
      dispatch(updateContacts(newContacts));
    });
  };
};
export const fetchSortedContacts = () => ({
  type: "Fetch_Sorted_Contacts"
});
