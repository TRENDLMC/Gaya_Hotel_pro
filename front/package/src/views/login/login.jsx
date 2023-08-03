import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import LoginForm from "./sections/loginform.jsx";

const Login = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.object,
};

export default Login;
