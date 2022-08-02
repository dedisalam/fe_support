import React, { useState } from 'react';
import {
  Card,
  Col,
  Row,
} from 'react-bootstrap';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '_/atoms';
import type { ErrMsg } from '_/atoms/errorMessage';
import { Form } from '_/organisms/customer/pic';
import { isEmpty } from '_/utils';
import { create, response } from './function';

function Create() {
  const status = useState(false);
  const error = useState<ErrMsg>({});
  const navigate = useNavigate();
  const mutation = useMutation(create, response(status, error, navigate));

  const onSubmit = async (formData) => {
    await mutation.mutate(formData);
  };

  return (
    <Col>
      <Row className="py-2">
        <Col lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="lh-base">
                Create PIC
              </Card.Title>
              <hr />
              {!isEmpty(error[0]) && <ErrorMessage error={error[0]} />}
              <Form onSubmit={onSubmit} isMutate={status[0]} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default Create;
