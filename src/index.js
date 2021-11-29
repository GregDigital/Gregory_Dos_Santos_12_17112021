import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import User from "./pages/User";
import Error from "./components/404";
import App from "./service/Datas";
import Nutrition from "./components/Chart/Nutrition";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nutrition render={(props) => <App {...props} />} />
      <Header />
      <Aside />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user/:id" render={(props) => <App {...props} />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
