import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Component(): JSX.Element {
  return (
    <Spinner size="sm" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
