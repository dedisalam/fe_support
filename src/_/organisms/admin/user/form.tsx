import React from 'react';
import { Button, FloatingLabel, Form as FormBootstrap } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

type FormProps = {
  onSubmit: (value: any) => void;
  isMutate: boolean;
  data?: {
    email: string;
  }
};

function Form(props: FormProps) {
  const { onSubmit, isMutate, data } = props;
  const {
    register, formState: { errors }, handleSubmit, setValue,
  } = useForm();

  const email = register('email', {
    required: 'Email is required',
    pattern: {
      value: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid email address',
    },
  });
  const password = register('password', { required: 'Password is required' });

  if (data) {
    setValue('email', data.email);
  }

  return (
    <FormBootstrap>
      <fieldset disabled={isMutate}>
        <FormBootstrap.Group controlId="Email">
          <FloatingLabel
            controlId="Email"
            label="Email *"
            className="mb-3"
          >
            <FormBootstrap.Control
              isInvalid={!!errors.email}
              type="email"
              placeholder="Email"
              name={email.name}
              ref={email.ref}
              onChange={email.onChange}
              onBlur={email.onBlur}
            />
            {errors.email && (
            <FormBootstrap.Control.Feedback type="invalid">
              {errors.email.message.toString()}
            </FormBootstrap.Control.Feedback>
            )}
          </FloatingLabel>
        </FormBootstrap.Group>
        <FormBootstrap.Group controlId="Password">
          <FloatingLabel
            controlId="Password"
            label="Password *"
            className="mb-3"
          >
            <FormBootstrap.Control
              isInvalid={!!errors.password}
              type="password"
              placeholder="Password"
              name={password.name}
              ref={password.ref}
              onChange={password.onChange}
              onBlur={password.onBlur}
            />
            {errors.password && (
            <FormBootstrap.Control.Feedback type="invalid">
              {errors.password.message.toString()}
            </FormBootstrap.Control.Feedback>
            )}
          </FloatingLabel>
        </FormBootstrap.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
          {isMutate ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : null}
          {isMutate ? ' Loading…' : 'Save'}
        </Button>
      </fieldset>
    </FormBootstrap>
  );
}

Form.defaultProps = {
  data: {},
};

export default Form;
