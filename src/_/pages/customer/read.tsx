import React, { useState } from 'react';
import {
  Button, Card, Col, Row, Stack,
} from 'react-bootstrap';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LinkContainer } from 'react-router-bootstrap';
import type { ErrMsg } from '_/atoms/errorMessage';
import ErrorMessage from '_/atoms/errorMessage';
import { Table } from '_/organisms/customer';
import { isEmpty } from '_/utils';
import { Delete as DeleteService, Read as ReadService } from '../../../services/customer';
import {
  ENDPOINT,
} from './function';

type MenuProps = {
  data: {
    title: string;
    links: string;
  };
};

function Menu(props: MenuProps) {
  const { data: { title, links } } = props;
  return (
    <Col className="py-2" md={3}>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="text-center lh-base">{title}</Card.Title>
          <hr />
          <Stack>
            <LinkContainer to={links}>
              <Button variant="primary">Show</Button>
            </LinkContainer>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Read() {
  // State
  const status = useState(false);
  const error = useState<ErrMsg>({});

  // Service
  const { data, isSuccess } = useQuery(...ReadService());
  const { invalidateQueries } = useQueryClient();
  const Mutation = useMutation(...DeleteService(status, error, invalidateQueries));

  // Handler
  const onClickDelete = async (formData) => { await Mutation.mutate(formData); };
  const onClickEdit = (formData): string => `${ENDPOINT}/update/${formData}`;

  if (isSuccess) {
    return (
      <Col>
        <Row>
          {data.data.menu !== undefined ? data.data.menu.map((item) => (
            <Menu key={item.id} data={item} />
          )) : null}
        </Row>
        <Row className="py-2">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between lh-base">
                  Customers
                  <LinkContainer to={ENDPOINT}>
                    <Button variant="success" size="sm">
                      <i className="bi bi-pen-fill" />
                      {' '}
                      Add
                    </Button>
                  </LinkContainer>
                </Card.Title>
                <hr />
                {!isEmpty(error[0]) && <ErrorMessage error={error[0]} />}
                <Table
                  data={data.data.data}
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
