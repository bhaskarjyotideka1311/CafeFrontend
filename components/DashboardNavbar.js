import { NavLink as ReactLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

const DashboardNavbar =()=>{
    return (
        <div>
        <Navbar 
          color="dark" 
          dark
          expand="md"
          fixed=""
        >
        <NavbarBrand tag={ReactLink} to="/">User Dashboard</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink tag={ReactLink} to="/category">
                Category
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/product">
                Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/order">
                Order
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
    );
};

export default DashboardNavbar;