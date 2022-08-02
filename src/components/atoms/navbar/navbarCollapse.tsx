import React from 'react';
import { Navbar } from 'react-bootstrap';
import type { NavbarCollapse as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, id, className } = props;
  return (
    <Navbar.Collapse
      id={id}
      className={className}
      role="button"
    >
      {children}
    </Navbar.Collapse>
  );
}
