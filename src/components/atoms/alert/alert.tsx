import React from 'react';
import { Alert } from 'react-bootstrap';
import type { Alert as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, variant } = props;
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  );
}
