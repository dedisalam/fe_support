import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import type { NavDropdownItem as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, onClick } = props;
  return (
    <NavDropdown.Item onClick={onClick}>{children}</NavDropdown.Item>
  );
}
