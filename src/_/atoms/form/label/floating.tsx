import React from 'react';
import { FloatingLabel } from 'react-bootstrap';

export type FloatingProps = {
  controlId: string;
  label: React.ReactNode;
  children: React.ReactNode;
};

function Floating(props: FloatingProps) {
  const { controlId, label, children } = props;
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

export default Floating;
