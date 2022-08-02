import React from 'react';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import type { NavbarBrand as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, href } = props;
  return (
    <LinkContainer to={href}>
      <Navbar.Brand>
        {children}
      </Navbar.Brand>
    </LinkContainer>
  );
}
