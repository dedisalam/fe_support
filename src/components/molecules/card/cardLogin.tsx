import React from 'react';
import { Card } from '@atoms';
import type { CardLogin as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="text-center">Login</Card.Title>
        <hr />
        {children}
      </Card.Body>
    </Card>
  );
}
