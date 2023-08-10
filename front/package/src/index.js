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
import Reservation from "./views/reservation/reservation";
import * as dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear"; // 윤년 판단 플러그인
import "dayjs/locale/ko"; // 한국어 가져오기
import Roomlist from "./views/list/roomlist.jsx";
import Memberinfo from "./views/memberinfo/memberinfo";
import { FailPage } from "./views/pay/sections/fail";
import { SuccessPage } from './views/pay/sections/success';

dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale("ko"); // 언어 등록
const root = ReactDOM.createRoot(document.getElementById("root"));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/custom-components" element={<CustomComponents />} />
      <Route path="/" element={<Components />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/reservationlist" element={<Roomlist />} />
      <Route path="/mypage" element={<Memberinfo />} />
      <Route path="/fail" element={<FailPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
