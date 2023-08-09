/* eslint-disable */
import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";

import logo from "../../assets/images/logos/vertical_logo.png";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [grade, setGrade] = useState("");
  const toggle = () => setIsOpen(!isOpen);

  const [loginSession, setLoginSession] = useState(null);

  const bannerst = {
    positon: "relative",
    backgroundColor: "#8f103d",
  };

  useEffect(() => {
    setLoginSession(sessionStorage.getItem("id"));
    var id = {
      id: sessionStorage.getItem("id")
    }
    fetch("http://localhost:8095/user/gradecheck", {
      method: "POST",//조회
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    })
      .then((response) => {
        return response.json();
      }).then((date) => {
        sessionStorage.setItem("grade", date);
        setGrade(date);
      }).catch((err) => {
        console.log(err);
      });
    sessionCheck();
  }, [loginSession]);

  const sessionClear = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("grade");
    setLoginSession(null);
    alert("로그아웃 되었습니다.");
  };

  const sessionCheck = () => {
    if (loginSession == null) {
      return (
        <Link className="nav-link" to={"/login"}>
          로그인
        </Link>
      );
    } else {
      return (
        <Link className="nav-link" to={"/"} onClick={sessionClear}>
          로그아웃
        </Link>
      );
    }
  };
  const gradeCheck = () => {
    if (grade === 1) {
      return (
        <Link className="nav-link" to={"/mypage"} >
          관리자페이지
        </Link>
      )
    } else {
      return (
        <Link className="nav-link" to={"/mypage"}>
          마이페이지
        </Link>
      )
    }
  };
  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/

  return (
    <div style={bannerst}>
      <Container>
        <Navbar className="navbar-expand-lg h2-nav">
          <NavbarBrand href="#">
            <img src={logo} alt="wrapkit" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <span className="ti-menu text-white"></span>
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar id="header1">
            <Nav navbar className="ms-auto">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  호텔소개 <i className="fa fa-angle-down m-l-5"></i>
                </DropdownToggle>
                <DropdownMenu className="b-none animated fadeInUp">
                  <DropdownItem>호텔 소개</DropdownItem>
                  <DropdownItem>방 소개</DropdownItem>
                  <DropdownItem>서비스소개</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>찾아오시는길</DropdownItem>
                  <DropdownItem>예약안내</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link className="nav-link" to={"/reservationlist"}>
                  예약
                </Link>
              </NavItem>
              {loginSession && <NavItem>{gradeCheck()}</NavItem>}
              <NavItem>{sessionCheck()}</NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
export default Header;
