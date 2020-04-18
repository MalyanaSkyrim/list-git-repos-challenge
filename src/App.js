import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ListReposContainer from "./components/ListReposContainer";

function App() {
  return (
    <Provider store={store}>
      <ListReposContainer></ListReposContainer>
    </Provider>
  );
}

export default App;
