import React from 'react';
import { Button, Spinner } from '@atoms';
import type { ButtonSave as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { isLoading } = props;
  return (
    <Button variant="primary" type="submit">
      {isLoading ? <Spinner /> : null}
      {isLoading ? ' Loading…' : 'Save'}
    </Button>
  );
}
