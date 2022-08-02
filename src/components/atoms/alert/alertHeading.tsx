import React from 'react';
import { Alert } from 'react-bootstrap';
import type { AlertHeading as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <Alert.Heading>
      {children}
    </Alert.Heading>
  );
}
