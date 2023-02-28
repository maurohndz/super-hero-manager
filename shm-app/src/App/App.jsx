import React from "react";
import { Provider } from "react-redux";

// Redux
import { store } from "../store";

//
import Home from "../pages/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
