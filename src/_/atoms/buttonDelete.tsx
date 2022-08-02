import React from 'react';
import { Button } from 'react-bootstrap';

interface ButtonDeleteProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function ButtonDelete(props: ButtonDeleteProps) {
  const { onClick, disabled } = props;
  return (
    <Button
      variant="danger"
      size="sm"
      className="mx-1 rounded"
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : <i className="bi bi-trash-fill" />}
      {disabled ? ' Loading…' : 'Delete'}
    </Button>
  );
}

ButtonDelete.defaultProps = {
  disabled: false,
};

export default ButtonDelete;
