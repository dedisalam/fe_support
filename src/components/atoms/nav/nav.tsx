import React from 'react';
import { Nav } from 'react-bootstrap';
import type { Nav as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <Nav>{children}</Nav>
  );
}
