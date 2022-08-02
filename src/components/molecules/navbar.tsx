import React from 'react';
import {
  Layout, Navbar,
} from '@atoms';
import type { Navbar as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <Navbar bg="primary" sticky="top" variant="dark" expand="lg">
      <Layout fluid>
        <Navbar.Brand href="/">
          SUPPORT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-support" />
        <Navbar.Collapse
          id="navbar-support"
          className="justify-content-end"
        >
          {children}
        </Navbar.Collapse>
      </Layout>
    </Navbar>
  );
}
