import React from 'react';
import { Navbar } from 'react-bootstrap';
import type { NavbarToggle as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { 'aria-controls': AriaControls } = props;
  return (
    <Navbar.Toggle aria-controls={AriaControls} />
  );
}
