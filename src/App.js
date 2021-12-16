import React from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";

import Error from "./components/404";
import Datas from "./service/Datas";

import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Routes of the app.

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Aside />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/:id" render={(props) => <Datas {...props} />} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
