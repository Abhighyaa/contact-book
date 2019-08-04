export const addContact = contact => ({
  type: "Add_Contact",
  contact: contact
});
export const deleteContact = id => ({
  type: "Delete_Contact",
  id: id
});
export const getContacts = () => ({
  type: "Get_Contacts"
});
export const sortName = contacts => ({
  type: "Sort_byName",
  contacts: contacts
});
export const sortContact = contacts => ({
  type: "Sort_byContact",
  contacts: contacts
});
