import * as dayjs from "dayjs";
import "dayjs/locale/ko"; // 한국어 가져오기
import isLeapYear from "dayjs/plugin/isLeapYear"; // 윤년 판단 플러그인
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import reportWebVitals from "./reportWebVitals";
import Home from "./views/home/home.jsx";
import Roomlist from "./views/list/roomlist.jsx";
import Login from "./views/login/login.jsx";
import Memberinfo from "./views/memberinfo/memberinfo";
import Reservation from "./views/reservation/reservation";
import Signup from "./views/singup/signup.jsx";
import { FailPage } from "./views/pay/sections/fail";
import { SuccessPage } from "./views/pay/sections/success";
import Information from "./views/infomation/info";
import TopButton from "./views/home/sections/topbutton";
import ScrollToTop from "./views/home/sections/scrolltop";

dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale("ko"); // 언어 등록
const root = ReactDOM.createRoot(document.getElementById("root"));

var hist = createBrowserHistory();
root.render(
  <BrowserRouter history={hist}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/reservationlist" element={<Roomlist />} />
      <Route path="/mypage" element={<Memberinfo />} />
      <Route path="/fail" element={<FailPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/info" element={<Information />} />
    </Routes>
    <TopButton />
    <ScrollToTop />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
