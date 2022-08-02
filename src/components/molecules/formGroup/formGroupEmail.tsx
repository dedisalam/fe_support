import React from 'react';
import { Form } from '@atoms';
import type { FormGroupEmail as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const {
    controlId, label, error, control,
  } = props;
  return (
    <Form.Group controlId={controlId}>
      <Form.FloatingLabel
        controlId={controlId}
        label={label}
      >
        <Form.Control
          isInvalid={!!error[control.name]}
          type="email"
          placeholder={label}
          name={control.name}
          controlRef={control.ref}
          onChange={control.onChange}
          onBlur={control.onBlur}
        />
        <Form.Control.Feedback type="invalid">
          {error[control.name] ? error[control.name].message.toString() : ''}
        </Form.Control.Feedback>
      </Form.FloatingLabel>
    </Form.Group>
  );
}
