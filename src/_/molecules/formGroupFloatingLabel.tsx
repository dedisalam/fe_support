import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { verifyEmail } from '_/utils';

type FormGroupFloatingLabelProps = {
  setValue: (value: string) => void;
  value: string;
};

function FormGroupFloatingLabel(props: FormGroupFloatingLabelProps) {
  const { value, setValue } = props;
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const handle = (e) => {
    if (verifyEmail(e.target.value)) {
      setIsInvalid(false);
      setErrorMsg('');
    } else {
      setIsInvalid(true);
      setErrorMsg('Email is invalid');
    }

    setValue(e.target.value);
  };

  return (
    <Form.Group className="mb-3" controlId="L_Username">
      <FloatingLabel
        controlId="L_Username"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          formNoValidate
          isInvalid={isInvalid}
          required
          type="email"
          placeholder="Email"
          value={value}
          onChange={handle}
        />
      </FloatingLabel>
      <Form.Control.Feedback type="invalid">
        {errorMsg}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default FormGroupFloatingLabel;
