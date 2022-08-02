import React from 'react';
import { Table } from 'react-bootstrap';
import type { Table as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const {
    children, striped, responsive, hover,
  } = props;
  return (
    <Table striped={striped} responsive={responsive} hover={hover}>
      {children}
    </Table>
  );
}
