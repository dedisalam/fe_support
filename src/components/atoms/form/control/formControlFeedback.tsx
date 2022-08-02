import React from 'react';
import { Form } from 'react-bootstrap';
import type { FormControlFeedback as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, type } = props;
  return (
    <Form.Control.Feedback type={type}>
      {children}
    </Form.Control.Feedback>
  );
}
