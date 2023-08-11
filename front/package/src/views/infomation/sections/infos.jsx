import React, { useState } from 'react';
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";



const Leftnavi = () => {


  return (
    <div nav inNavbar>

      <NavItem>
        <Link to={"/info"} state={{ num: 1 }} >
          호텔소개
        </Link>

      </NavItem>
      <NavItem>
        <Link to={"/info"} state={{ num: 2 }}>
          방 소개
        </Link>
      </NavItem>
      <NavItem>
        <Link to={"/info"} state={{ num: 3 }}>
          서비스소개
        </Link>
      </NavItem>
      <NavItem>
        <Link to={"/info"} state={{ num: 4 }}>
          찾아오시는길
        </Link>
      </NavItem>
      <NavItem>
        <Link to={"/info"} state={{ num: 5 }}>
          예약 안내
        </Link>
      </NavItem>
    </div>

  )




}

export default Leftnavi;