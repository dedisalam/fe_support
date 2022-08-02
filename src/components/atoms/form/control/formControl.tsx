import React from 'react';
import { Form } from 'react-bootstrap';
import type { FormControl as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const {
    isInvalid, type, placeholder, name, controlRef, onChange, onBlur,
  } = props;
  return (
    <Form.Control
      isInvalid={isInvalid}
      type={type}
      placeholder={placeholder}
      name={name}
      ref={controlRef}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
