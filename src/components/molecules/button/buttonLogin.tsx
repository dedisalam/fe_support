import React from 'react';
import { Button, Spinner } from '@atoms';
import type { ButtonLogin as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { isLoading, onClick } = props;
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" type="submit" onClick={onClick}>
        {isLoading ? <Spinner /> : null}
        {isLoading ? ' Loading…' : 'Login'}
      </Button>
    </div>
  );
}
