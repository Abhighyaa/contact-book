// const sortReducer = (state=[], action) => {
//   switch (action.type) {
//     case "Sort_byName":
//       var sorted = [action.contacts];
//       sorted.sort((a, b) => {
//         return a.name.localeCompare(b.name);
//       });
//       console.log(sorted)
//       return Object.assign({}, state, {
//         contacts: sorted
//       });

//     case "Sort_byContact":
//       var sorted = action.contacts;
//       sorted.sort((a, b) => {
//         return a.contact - b.contact;
//       });
//       return Object.assign({}, state.contactsReducer, {
//         contacts: sorted
//       });
//   }
//   return state;
// };

// export default sortReducer;
