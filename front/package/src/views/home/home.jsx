import PropTypes from "prop-types";
import React from "react";

// core components
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";

// sections for this page
import BlogComponent from "./sections/blogcomponent.jsx";
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import PageTable from "./sections/table.jsx";

const Home = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner />
          <PortfolioComponent />
          <BlogComponent />
          <PageTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object,
};

export default Home;
