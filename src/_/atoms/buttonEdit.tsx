import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

interface ButtonEditProps {
  onClick: string;
  disabled?: boolean;
}

function ButtonEdit(props: ButtonEditProps) {
  const { onClick, disabled } = props;
  return (
    <LinkContainer to={onClick}>
      <Button variant="success" size="sm" className="mx-1 rounded" disabled={disabled}>
        <i className="bi bi-pen-fill" />
        {' '}
        Edit
      </Button>
    </LinkContainer>
  );
}

ButtonEdit.defaultProps = {
  disabled: false,
};

export default ButtonEdit;
