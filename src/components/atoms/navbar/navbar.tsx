import React from 'react';
import { Navbar } from 'react-bootstrap';
import type { Navbar as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const {
    children, bg, sticky, variant, expand,
  } = props;
  return (
    <Navbar bg={bg} sticky={sticky} variant={variant} expand={expand}>
      {children}
    </Navbar>
  );
}
