import React from 'react';
import { FloatingLabel } from 'react-bootstrap';
import type { FormFloatingLabel as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, controlId, label } = props;
  return (
    <FloatingLabel
      controlId={controlId}
      label={label}
      className="mb-3"
    >
      {children}
    </FloatingLabel>
  );
}
