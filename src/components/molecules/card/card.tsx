import React from 'react';
import { Card } from '@atoms';
import type { Card as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { title, children } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        {children}
      </Card.Body>
    </Card>
  );
}
