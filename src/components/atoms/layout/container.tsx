import React from 'react';
import { Container } from 'react-bootstrap';
import type { Container as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { fluid, children, className } = props;
  return (
    <Container fluid={fluid} className={className}>{children}</Container>
  );
}
