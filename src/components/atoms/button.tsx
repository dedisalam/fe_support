import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import type { Button as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const {
    children, variant, size, href, type, className, onClick,
  } = props;

  const Btn = (
    <Button variant={variant} size={size} type={type} className={className} onClick={onClick}>
      {children}
    </Button>
  );

  if (href) {
    return (
      <LinkContainer to={href}>
        {Btn}
      </LinkContainer>
    );
  }
  return Btn;
}
