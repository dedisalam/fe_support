import React from 'react';
import {
  Container, Nav, NavDropdown, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AxiosInstance } from '_/configs';

type NavbarProps = {
  user: {
    email: string;
  };
};

function NavbarOrganisms(props: NavbarProps) {
  const { user } = props;
  const logout = async () => {
    try {
      const response = await AxiosInstance.post('/admin/user/logout', {});
      if (response.status === 200) {
        window.location.replace('/');
      }
    } catch {
      window.location.reload();
    }
  };

  return (
    <Navbar bg="primary" sticky="top" variant="dark" expand="lg">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          SUPPORT
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
          role="button"
        >
          <Nav>
            <NavDropdown
              align="end"
              className="fw-bold"
              id="basic-nav-dropdown"
              title={user.email}
            >
              <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarOrganisms;
