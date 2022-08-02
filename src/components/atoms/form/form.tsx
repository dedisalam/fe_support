import React from 'react';
import { Form } from 'react-bootstrap';
import type { Form as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <Form>{children}</Form>
  );
}
