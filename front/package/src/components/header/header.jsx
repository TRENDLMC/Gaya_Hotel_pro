/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import logo from '../../assets/images/logos/white-text.png';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const bannerst={
        positon:"relative",
        backgroundColor:"#8f103d",
    }
    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div style={bannerst}>
        <Container>
            <Navbar className="navbar-expand-lg h2-nav">
                <NavbarBrand href="#"><img src={logo} alt="wrapkit" /></NavbarBrand>
                <NavbarToggler onClick={toggle}><span className="ti-menu text-white"></span></NavbarToggler>
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
                            <Link className="nav-link" to={"/custom-components"}>
                                예약    
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={"/"}>
                               리뷰
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={"/login"}>
                                로그인
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    </div>
    );

}
export default Header;
