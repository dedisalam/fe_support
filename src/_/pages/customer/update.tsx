import React, { useState } from 'react';
import {
  Card,
  Col,
  Row,
} from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import type { ErrMsg } from '_/atoms/errorMessage';
import ErrorMessage from '_/atoms/errorMessage';
import { Form } from '_/organisms/customer';
import { isEmpty } from '_/utils';
import {
  ENDPOINT, readById, response, update,
} from './function';

function UpdateCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const status = useState(false);
  const error = useState<ErrMsg>({});
  const responseGet = useQuery(`${ENDPOINT}/${id}`, async () => readById(Number(id)));
  const Mutation = useMutation(
    async (val) => update(Number(id), val),
    response(status, error, navigate),
  );

  const onSubmit = async (formValues) => {
    await Mutation.mutate(formValues);
  };

  return (
    <Col>
      <Row className="py-2">
        <Col lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="lh-base">
                Update Customer
              </Card.Title>
              <hr />
              {!isEmpty(error[0]) && <ErrorMessage error={error[0]} />}
              {responseGet.isSuccess && (
              <Form
                data={responseGet.data.data.data}
                onSubmit={onSubmit}
                isMutate={status[0]}
              />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default UpdateCustomer;
