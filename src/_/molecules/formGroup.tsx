import React from 'react';
import type { FormGroupProps } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import type { NormalProps } from '_/atoms/formGroup';
import { Normal } from '_/atoms/formGroup';

type FormGroupProp = & FormGroupProps & NormalProps & {
};

function FormGroup(props: FormGroupProp) {
  const {
    controlId, label, onChange, placeholder, type, value,
  } = props;
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Normal
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </Form.Group>
  );
}

export default FormGroup;
