import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from '@atoms';
import type { ButtonEdit as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { href } = props;
  return (
    <LinkContainer to={href}>
      <Button variant="warning" size="sm">
        <i className="bi bi-pen-fill" />
        {' '}
        Edit
      </Button>
    </LinkContainer>
  );
}
