import React, { useState } from 'react';
import {
  Card, Col, Row,
} from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import type { ErrMsg } from '_/atoms/errorMessage';
import ErrorMessage from '_/atoms/errorMessage';
import { Form } from '_/organisms/admin/user';
import { isEmpty } from '_/utils';
import type { AxiosResponse } from 'axios';
import {
  ENDPOINT, ENDPOINTS, GetById, PutById,
} from './functions';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isMutate, setMutate] = useState(false);
  const [errMsg, setErrMsg] = useState<ErrMsg>({});

  const {
    data, isSuccess,
  } = useQuery(`${ENDPOINT}/${id}`, async () => GetById(Number(id)));

  const Mutation = useMutation(async (val) => PutById(Number(id), val), {
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

  const onSubmit = async (formValues) => {
    await Mutation.mutate(formValues);
  };

  return (
    <Col>
      <Row className="py-2">
        <Col lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Update User</Card.Title>
              <hr />
              {!isEmpty(errMsg) && <ErrorMessage error={errMsg} />}
              {isSuccess && <Form data={data.data.data} onSubmit={onSubmit} isMutate={isMutate} />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default Update;
