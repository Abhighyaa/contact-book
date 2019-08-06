import React from "react";
import "./App.css";
import Menu from "./containers/Menu";
import combinedReducers from "./reducers";
import { Provider } from "react-redux";
import ShowContacts from "./containers/showContacts";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(combinedReducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Menu></Menu>
          <div id="suggestions"></div>
          <ShowContacts></ShowContacts>
        </div>
      </Provider>
    );
  }
}
export default App;
