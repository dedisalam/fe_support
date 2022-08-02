import React, { useState } from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LinkContainer } from 'react-router-bootstrap';
import type { ErrMsg } from '_/atoms/errorMessage';
import { Table } from '_/organisms/customer/pic';
import {
  ENDPOINT, ENDPOINTS, deleteById, read, response,
} from './function';

function Read() {
  const status = useState(false);
  const error = useState<ErrMsg>({});
  const responseGet = useQuery(ENDPOINTS, read);
  const { invalidateQueries } = useQueryClient();
  const Mutation = useMutation(deleteById, response(status, error, invalidateQueries));

  const onClickDelete = async (formData) => {
    await Mutation.mutate(formData);
  };
  const onClickEdit = (formData): string => `${ENDPOINT}/update/${formData}`;

  if (responseGet.isSuccess) {
    return (
      <Col>
        <Row className="py-2">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between lh-base">
                  Person In Charge
                  <LinkContainer to={ENDPOINT}>
                    <Button variant="success" size="sm">
                      <i className="bi bi-pen-fill" />
                      {' '}
                      Add
                    </Button>
                  </LinkContainer>
                </Card.Title>
                <hr />
                <Table
                  data={responseGet.data.data.data}
                  onClickDelete={onClickDelete}
                  onClickEdit={onClickEdit}
                  isMutate={status[0]}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Read;
