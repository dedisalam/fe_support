import React from 'react';
import { Nav } from '@atoms';
import { Navbar } from '@molecules';

export default function Component(): JSX.Element {
  return (
    <Navbar>
      <Nav>
        <Nav.Dropdown
          align="end"
          className="fw-bold"
          id="basic-nav-dropdown"
          title="Title"
        >
          <Nav.Dropdown.Item onClick={() => console.log('click')}>Log Out</Nav.Dropdown.Item>
        </Nav.Dropdown>
      </Nav>
    </Navbar>
  );
}
