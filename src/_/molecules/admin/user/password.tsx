import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { verifyEmail } from '_/utils';

type PasswordProps = {
  data: {
    type: string;
    placeholder: string;
    required: boolean;
    // invalid: boolean;
    // error: string;
    // value: string;
    // set: React.Dispatch<React.SetStateAction<string>>;
  };
};

function Feedback(props) {
  const { error } = props;
  if (error) {
    return (
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    );
  }
}

function Password(props: PasswordProps) {
  const { data } = props;
  const [value, setValue] = React.useState('');
  const [invalid, setInvalid] = React.useState(false);
  const [error, setError] = React.useState('');
  if (!data) {
    return null;
  }

  const handleInvalid = (e) => {
    setValue(e.target.value);
    // if (data.invalid) {
    //   setInvalid(true);
    //   setError(data.error);
    // }
    if (!verifyEmail(value)) {
      setInvalid(true);
      setError('Email is invalid');
    } else {
      setInvalid(false);
      setError('');
    }
  };

  return (
    <Form.Group className="mb-3" controlId={data.id}>
      <FloatingLabel
        controlId={data.id}
        label={data.placeholder}
        className="mb-3"
      >
        <Form.Control
          isInvalid={invalid}
          onChange={handleInvalid}
          placeholder={data.placeholder}
          required={data.required}
          type={data.type}
          value={value}
        />
        <Feedback data={error} />

      </FloatingLabel>
    </Form.Group>
  );
}

export default Password;
