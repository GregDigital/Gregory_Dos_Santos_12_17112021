import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
