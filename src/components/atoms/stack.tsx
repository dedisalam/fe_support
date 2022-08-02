import React from 'react';
import { Stack } from 'react-bootstrap';
import type { Stack as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <Stack>
      {children}
    </Stack>
  );
}
