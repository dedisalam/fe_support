import React, { useState } from 'react';
import {
  Card,
  Col,
  Row,
} from 'react-bootstrap';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import type { ErrMsg } from '_/atoms/errorMessage';
import ErrorMessage from '_/atoms/errorMessage';
import { Form } from '_/organisms/admin/user';
import { isEmpty } from '_/utils';
import type { AxiosResponse } from 'axios';
import { ENDPOINTS, Post } from './functions';

function Create() {
  const navigate = useNavigate();
  const [isMutate, setMutate] = useState(false);
  const [errMsg, setErrMsg] = useState<ErrMsg>({});

  const Mutation = useMutation(Post, {
    onSuccess: async () => {
      navigate(ENDPOINTS);
      setMutate(false);
    },
    onMutate: () => {
      setErrMsg({});
      setMutate(true);
    },
    onError: async ({ response }: { response: AxiosResponse }) => {
      if (response.status === 401) {
        window.location.href = '/';
      }
      setErrMsg({
        ...errMsg,
        status: response.status,
        statusText: response.statusText,
        message: response.data.message,
      });
      setMutate(false);
    },
  });

  const onSubmit = async (data) => {
    await Mutation.mutate(data);
  };

  return (
    <Col>
      <Row className="py-2">
        <Col lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Create User</Card.Title>
              <hr />
              {!isEmpty(errMsg) && <ErrorMessage error={errMsg} />}
              <Form onSubmit={onSubmit} isMutate={isMutate} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default Create;
