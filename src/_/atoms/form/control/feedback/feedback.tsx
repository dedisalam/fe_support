import React from 'react';
import { Form } from 'react-bootstrap';

export type FeedbackProps = {
  children: React.ReactNode;
};

function Feedback(props: FeedbackProps) {
  const { children } = props;
  return (
    <Form.Control.Feedback type="invalid">
      {children}
    </Form.Control.Feedback>
  );
}

export default Feedback;
