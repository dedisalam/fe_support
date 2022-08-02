import React from 'react';
import { Form, FormControlProps, FormLabelProps } from 'react-bootstrap';

export type NormalProps =
FormLabelProps
& FormControlProps
& {
  label: string;
};

function Normal(props: NormalProps) {
  const {
    label, type, placeholder, value, onChange,
  } = props;
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Normal;
