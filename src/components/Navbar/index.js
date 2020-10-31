import React from 'react';
import { FaBars } from 'react-icons/fa';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, 
    NavBtnLink, NavBtn} from './NavbarElements'


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Sky-Bot</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about">About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
