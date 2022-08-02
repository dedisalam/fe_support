import React from 'react';
import { Card } from 'react-bootstrap';
import type { Card as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, className, bg } = props;

  let ClassName: string;
  if (className) {
    ClassName = ['shadow-sm', className].join(' ');
  } else {
    ClassName = 'shadow-sm';
  }

  return (
    <Card bg={bg} className={ClassName}>
      {children}
    </Card>
  );
}
