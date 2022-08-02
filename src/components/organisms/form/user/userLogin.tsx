import React from 'react';
import type { Error } from '@args';
import { Form } from '@atoms';
import { Button, FormGroup } from '@molecules';
import { UserLogin as validations } from '@validations';

type Props = {
  onSubmit: (data: any) => void;
  isLoading: boolean;
  error: Error;
};

export default function Component(props: Props): JSX.Element {
  const { onSubmit, isLoading, error: err } = props;
  const {
    errors, handleSubmit, email, password,
  } = validations(err);

  return (
    <Form>
      <fieldset disabled={isLoading}>
        <FormGroup.Email
          error={errors}
          controlId="email"
          label="Email *"
          control={email}
        />
        <FormGroup.Password
          error={errors}
          control={password}
          controlId="password"
          label="Password *"
        />
        <Button.Login isLoading={isLoading} onClick={handleSubmit(onSubmit)} />
      </fieldset>
    </Form>
  );
}
