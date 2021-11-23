import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import User from "./pages/User";
import Error from "./components/404";

import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Aside />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user/:id" render={(props) => <User {...props} />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
