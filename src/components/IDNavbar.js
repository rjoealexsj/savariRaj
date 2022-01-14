import React, { Component } from 'react'
import { NavbarBrand, NavbarToggler, Navbar, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavbarText } from 'reactstrap'
export default class IDNavbar extends Component {
    render() {
        return (
            <div>
               <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed="top"
    full
  >
    <NavbarBrand href="/">
      VJ
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            STAFF
          </NavLink>
        </NavItem>
        
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            STUDENTS
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              FIRST YEAR
            </DropdownItem>
            <DropdownItem>
              SECOND YEAR
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              THIRD YEAR
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
          PORTFOLIOS
          </NavLink>
        </NavItem>
      
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
            </div>
        )
    }
}
