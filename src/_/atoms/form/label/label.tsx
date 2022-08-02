import React from 'react';
import { Form, FormLabelProps } from 'react-bootstrap';

export { type FormLabelProps as LabelProps };

function Label(props: FormLabelProps) {
  const { children } = props;
  return (
    <Form.Label>{children}</Form.Label>
  );
}

export default Label;
