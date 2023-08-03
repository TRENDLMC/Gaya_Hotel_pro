import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { Route, Routes, HashRouter } from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Login from "./views/login/login.jsx";
import Signup from "./views/singup/signup.jsx";
import Reservation from './views/reservation/reservation';

const root = ReactDOM.createRoot(document.getElementById("root"));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/custom-components" element={<CustomComponents />} />
      <Route path="/" element={<Components />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Signup />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
