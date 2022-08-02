import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

interface EmailProps {
  value: (value: string) => void;
  data: {
    id: string;
    label: string;
    type: string;
    required: boolean;
    floatingLabel?: boolean | undefined;
  }
}

function Floating(props) {
  const { data, value } = props;
  const [email, setEmail] = useState('');

  const handle = (event) => {
    setEmail(event.target.value);
    value(event.target.value);
  };
  return (
    <FloatingLabel
      controlId={data.id}
      label={data.label}
      className="mb-3"
    >
      <Form.Control
        //   isInvalid={data.invalid}
        required={data.required}
        type={data.type}
        placeholder="Email Address"
        value={email}
        onChange={handle}
      />
      <Form.Control.Feedback type="invalid">
        error
      </Form.Control.Feedback>
    </FloatingLabel>
  );
}

function Email(props: EmailProps) {
  const { value, data } = props;

  const control = () => {
    if (data.floatingLabel) {
      return <Floating value={value} data={data} />;
    }
    return (
      <Form.Control
        id={data.id}
        label={data.label}
        type={data.type}
        placeholder={data.label}
        value={value}
        onChange={value}
      />
    );
  };

  return (
    <Form.Group className="mb-3" controlId={data.id}>
      {control()}
    </Form.Group>
  );
}

export default Email;
