import React from 'react';
import { Form } from 'react-bootstrap';
import type { FormGroup as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, controlId } = props;
  return (
    <Form.Group controlId={controlId}>
      {children}
    </Form.Group>
  );
}
