import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { SuccessPage } from "./sections/success.jsx";
import { FailPage } from "./sections/fail.jsx";
import { CheckoutPage } from "./sections/checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/pay",
    element: <CheckoutPage />,
  },
  {
    path: "success",
    element: <SuccessPage />,
  },
  {
    path: "fail",
    element: <FailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const payinfo = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <CheckoutPage />
          <SuccessPage />
          <FailPage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

payinfo.propTypes = {
  classes: PropTypes.object,
};

export default payinfo;
