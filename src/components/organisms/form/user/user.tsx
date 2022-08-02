import React from 'react';
import { Form } from '@atoms';
import { Button, FormGroup } from '@molecules';

export default function Component(): JSX.Element {
  return (
    <Form>
      <fieldset disabled={false}>
        <FormGroup.Email controlId="email" label="Email *" />
        <FormGroup.Password controlId="password" label="Password *" />
        <Button.Save isLoading={false} />
      </fieldset>
    </Form>
  );
}
