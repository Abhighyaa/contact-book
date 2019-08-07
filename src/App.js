import React from "react";
import "./App.css";
import Menu from "./containers/Menu";
import store from "./store";
import { Provider } from "react-redux";
import ContactsTable from "./components/ContactsTable";

// export, export default, exports

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu></Menu>
        <div id="suggestions"></div>
        <ContactsTable></ContactsTable>
      </div>
    </Provider>
  );
};

export default App;
