import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
};

export default App;
