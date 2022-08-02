import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import type { NavDropdown as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const {
    align, className, id, title, children,
  } = props;
  return (
    <NavDropdown
      align={align}
      className={className}
      id={id}
      title={title}
    >
      {children}
    </NavDropdown>
  );
}
