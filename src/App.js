import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Menu from "./components/Menu";
import combineReducers from "./reducers";
import { Provider } from "react-redux";
import ShowContacts from './containers/showContacts'
import { createStore } from "redux";

const store = createStore(combineReducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Menu></Menu>
          <ShowContacts></ShowContacts>
        </div>
      </Provider>
    );
  }
}
export default App;
