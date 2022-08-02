import React from 'react';
import { Alert } from 'react-bootstrap';

export type ErrMsg = {
  status?: number;
  statusText?: string;
  message?: string;
};

function ErrorMessage({ error }: { error: ErrMsg }) {
  return (
    <Alert variant="danger">
      <h5 className="alert-heading">
        {error.status}
        {' '}
        {error.statusText}
      </h5>
      {error.message}
    </Alert>
  );
}

export default ErrorMessage;
