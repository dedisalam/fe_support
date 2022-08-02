import React from 'react';
import {
  Button, FloatingLabel, Form,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

interface FormLoginProps {
  onSubmit: (value: any) => void;
  isMutate: boolean;
}

function FormLogin(props: FormLoginProps) {
  const { onSubmit, isMutate } = props;
  const { register, formState: { errors }, handleSubmit } = useForm();

  const email = register('email', {
    required: 'Email is required',
    pattern: {
      value: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid email address',
    },
  });
  const password = register('password', { required: 'Password is required' });

  return (
    <Form>
      <fieldset disabled={isMutate}>

        <Form.Group className="mb-3" controlId="Email">
          <FloatingLabel
            controlId="Email"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              isInvalid={!!errors.email}
              type="email"
              placeholder="Email"
              name={email.name}
              ref={email.ref}
              onChange={email.onChange}
              onBlur={email.onBlur}
            />
            {errors.email && (
            <Form.Control.Feedback type="invalid">
              {errors.email.message.toString()}
            </Form.Control.Feedback>
            )}
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <FloatingLabel
            controlId="Password"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              isInvalid={!!errors.password}
              type="password"
              placeholder="Password"
              name={password.name}
              ref={password.ref}
              onChange={password.onChange}
              onBlur={password.onBlur}
            />
            {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password.message.toString()}
            </Form.Control.Feedback>
            )}
          </FloatingLabel>
        </Form.Group>

        {/* Button */}
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
            {isMutate ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : null}
            {isMutate ? ' Loading…' : 'Login'}
          </Button>
        </div>
      </fieldset>
    </Form>
  );
}

export default FormLogin;
