import React from 'react';
import { Card } from 'react-bootstrap';
import type { CardBody as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, className } = props;
  return (
    <Card.Body className={className}>
      {children}
    </Card.Body>
  );
}
