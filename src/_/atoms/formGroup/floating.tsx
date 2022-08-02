import React, { InputHTMLAttributes } from 'react';
import {
  FloatingLabel as FloatingLabelBootstrap, FloatingLabelProps, Form, FormControlProps,
} from 'react-bootstrap';

export type FloatingProps =
FloatingLabelProps
& FormControlProps
& InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

function Floating(props: FloatingProps) {
  const {
    controlId,
    isInvalid,
    label,
    onChange,
    placeholder,
    required,
    type,
    value,
  } = props;
  return (
    <FloatingLabelBootstrap
      controlId={controlId}
      label={label}
      className="mb-3"
    >
      <Form.Control
        formNoValidate
        isInvalid={isInvalid}
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FloatingLabelBootstrap>
  );
}

export default Floating;
