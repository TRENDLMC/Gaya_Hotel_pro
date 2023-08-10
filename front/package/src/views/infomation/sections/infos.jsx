import React,{useState} from 'react';
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
 
  
    return(
        <div nav inNavbar>
                
                <NavItem>
                <Link className="nav-link" to={"/reservationlist"}>
                < Link to={"/info"}>
                      호텔소개
                    </Link>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to={"/reservationlist"}>
                방 소개
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to={"/reservationlist"}>
                서비스소개
                </Link>
              </NavItem>
            <NavItem>
                <Link className="nav-link" to={"/reservationlist"}>
                찾아오시는길
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to={"/reservationlist"}>
                  예약 안내
                </Link>
              </NavItem>
              </div>
              
    )
  
  
  
  
  }
  
  export default Leftnavi;