import React from 'react';
import type { AlertError as Props } from '@props/molecules';
import { Alert } from '@atoms';

export default function Component(props: Props): JSX.Element {
  const { title, message } = props;
  return (
    <Alert variant="danger">
      <Alert.Heading>
        {title}
      </Alert.Heading>
      {message}
    </Alert>
  );
}
