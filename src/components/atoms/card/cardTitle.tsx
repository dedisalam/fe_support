import React from 'react';
import { Card } from 'react-bootstrap';
import type { CardTitle as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, as, className } = props;
  return (
    <Card.Title as={as} className={className}>
      {children}
    </Card.Title>
  );
}
