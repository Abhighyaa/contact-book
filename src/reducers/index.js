import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";
import suggestionsReducer from "./suggestionsReducer";

const combinedReducers=combineReducers({
  contactsReducer: contactsReducer,
  // suggestionsReducer: suggestionsReducer,
//   sortReducer:sortReducer(state.contactsReducer,action)
})

export default combinedReducers;