import { FC, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { logout } from '../../services/authentication/authService';
import { useDispatch } from "react-redux";
import { logoutReducer } from '../../features/authentication';
import { deleteCookie } from '../../utils/authentication';

const NavigationBar:FC = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const dispatch = useDispatch();

  const handleLogout = async () => {
      try {
          const response:any = await logout();
          if (response.status === 204) {
              dispatch(logoutReducer())
              await deleteCookie('frontToken');
          }
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <div>
      <Navbar className='bg-light'>
        <NavbarBrand href='/main' className='me-auto'>
          Home
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='me-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/private'>Main</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleLogout} href='/'>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;