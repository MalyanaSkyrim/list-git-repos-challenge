import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import ListReposContainer from "./components/ListReposContainer";
import RepoOwnerContainer from "./components/RepoOwnerContainer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ListReposContainer} />
        <Route exact path='/user/:username' component={RepoOwnerContainer} />
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
