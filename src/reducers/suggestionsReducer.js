const initialState = {
  suggestedNames:[]
}
const suggestionsReducer = (state=initialState, action) => {
  switch (action.type) {
    
    case "Fetch_Suggestions":
      var suggestedNames = [];
      if (action.suggestionsFor != "") {
        action.contacts.forEach(contact => {
          if (contact.name.includes(action.suggestionsFor)) {
            suggestedNames.push(contact.name);
          }
        });
        document.querySelector("#suggestions").textContent = suggestedNames;
        return suggestedNames;
      } else {
        document.querySelector("#suggestions").textContent = "";
        suggestedNames=[]
        return suggestedNames;
      }

    default:
      return state;
  }
};

export default suggestionsReducer;
