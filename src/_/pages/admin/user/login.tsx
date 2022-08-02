import React, { useState } from 'react';
import {
  Card,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import { useMutation } from 'react-query';
import type { ErrMsg } from '_/atoms/errorMessage';
import ErrorMessage from '_/atoms/errorMessage';
import { FormLogin } from '_/organisms/admin/user';
import { isEmpty } from '_/utils';
import type { AxiosResponse } from 'axios';
import { PostLogin } from './functions';

function Login() {
  const [isMutate, setMutate] = useState(false);
  const [errMsg, setErrMsg] = useState<ErrMsg>({});

  const Mutation = useMutation(PostLogin, {
    onSuccess: async () => {
      window.location.href = '/';
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
    <Container fluid className="bg-secondary bg-gradient bg-opacity-25">
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title as="h2" className="text-center">
                Login
              </Card.Title>
              <hr />
              {!isEmpty(errMsg) && <ErrorMessage error={errMsg} />}
              <FormLogin onSubmit={onSubmit} isMutate={isMutate} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
