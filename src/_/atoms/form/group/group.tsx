import React from 'react';
import { Form, FormGroupProps } from 'react-bootstrap';

export type GroupProps = {
  children: React.ReactNode;
  controlId: string;
};

function Group(props: FormGroupProps) {
  const { children, controlId } = props;
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      {children}
    </Form.Group>
  );
}

export default Group;
