import React from 'react';
import { ListGroup } from 'react-bootstrap';
import type { ListGroup as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { variant, activeKey, children } = props;
  return (
    <ListGroup variant={variant} activeKey={activeKey}>
      {children}
    </ListGroup>
  );
}
