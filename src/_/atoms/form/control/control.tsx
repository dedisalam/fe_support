import React from 'react';
import { Form } from 'react-bootstrap';

export type ControlProps = {
  isInvalid: boolean;
  required: boolean;
  type: string;
  placeholder: string;
  value: string | number | string[];
  onChange : React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
};

function Control(props:ControlProps) {
  const {
    isInvalid, type, placeholder, value, onChange, required,
  } = props;
  return (
    <Form.Control
      formNoValidate
      isInvalid={isInvalid}
      required={required}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Control;
