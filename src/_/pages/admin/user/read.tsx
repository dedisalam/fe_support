import React, { useState } from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LinkContainer } from 'react-router-bootstrap';
import type { ErrMsg } from '_/atoms/errorMessage';
import { Table } from '_/organisms/admin/user';
import type { AxiosResponse } from 'axios';
import {
  DeleteById, ENDPOINT, ENDPOINTS, Get,
} from './functions';

function Read() {
  const [isMutate, setMutate] = useState(false);
  const [errMsg, setErrMsg] = useState<ErrMsg>({});
  const {
    data, isSuccess,
  } = useQuery(ENDPOINTS, Get);

  const queryClient = useQueryClient();
  const Mutation = useMutation(async (val) => DeleteById(val), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(ENDPOINTS);
      setMutate(false);
    },
    onMutate: () => {
      setErrMsg({});
      setMutate(true);
    },
    onError: async ({ response }: { response: AxiosResponse }) => {
      setErrMsg({
        ...errMsg,
        status: response.status,
        statusText: response.statusText,
        message: response.data.message,
      });
      setMutate(false);
    },
  });

  const onClickDelete = async (id) => {
    await Mutation.mutate(id);
  };

  const onClickEdit = (id): string => `${ENDPOINT}/${id}`;

  return (
    <Col>
      <Row className="py-2">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between lh-base">
                Users
                <LinkContainer to={ENDPOINT}>
                  <Button variant="success" size="sm">
                    <i className="bi bi-pen-fill" />
                    {' '}
                    Add
                  </Button>
                </LinkContainer>
              </Card.Title>
              <hr />

              {isSuccess && (
                <Table
                  data={data.data.data}
                  onClickDelete={onClickDelete}
                  onClickEdit={onClickEdit}
                  isMutate={isMutate}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default Read;
