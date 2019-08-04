import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";
// import sortReducer from "./sortReducer";

export default combineReducers({
  contactsReducer: contactsReducer,
//   sortReducer:sortReducer(state.contactsReducer,action)
})
