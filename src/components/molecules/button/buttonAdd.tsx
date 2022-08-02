import React from 'react';
import { PencilFill } from 'react-bootstrap-icons';
import { Button } from '@atoms';
import type { ButtonAdd as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { href } = props;
  return (
    <Button variant="success" size="sm" href={href}>
      <PencilFill />
      {' '}
      Add
    </Button>
  );
}
