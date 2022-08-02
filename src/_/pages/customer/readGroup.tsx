import React, { useState } from 'react';
import {
  Button, Card, Col, FloatingLabel, Form as FormBootstrap, Modal as ModalBootstrap, Row, Stack,
} from 'react-bootstrap';
import { ChevronLeft, PersonCircle } from 'react-bootstrap-icons';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrMsg } from '_/atoms/errorMessage';
import { TableProfile } from '_/organisms/customer';
import { AxiosResponse } from 'axios';
import { ENDPOINT, ENDPOINTS, GetProfileById } from './function';
import { PutById } from './profile/function';

type ModalProps = {
  show: boolean;
  onHide: () => void;
};

function Modal(props: ModalProps) {
  const { onHide, show } = props;
  return (
    <ModalBootstrap
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBootstrap.Header closeButton>
        <ModalBootstrap.Title id="contained-modal-title-vcenter">
          Add Profile
        </ModalBootstrap.Title>
      </ModalBootstrap.Header>
      <ModalBootstrap.Body>
        <FormBootstrap>
          <FormBootstrap.Group controlId="Profile">
            <FloatingLabel
              controlId="Profile"
              label="Profile *"
              className="mb-3"
            >
              <FormBootstrap.Select aria-label="Profile">
                <option>-</option>
              </FormBootstrap.Select>
            </FloatingLabel>
          </FormBootstrap.Group>
        </FormBootstrap>
      </ModalBootstrap.Body>
      <ModalBootstrap.Footer>
        <Button onClick={onHide}>Add</Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
}

function ReadGroup() {
  // const [modalShow, setModalShow] = useState(false);
  // const navigate = useNavigate();
  // const { id } = useParams();

  // const [isMutate, setMutate] = useState(false);
  // const [errMsg, setErrMsg] = useState<ErrMsg>({});
  // const {
  //   data, isSuccess,
  // } = useQuery(`${ENDPOINT}/${id}/profile`, async () => GetProfileById(Number(id)));

  // const queryClient = useQueryClient();
  // const Mutation = useMutation(async (val) => PutById(Number(val.id), {
  //   name: val.name,
  //   address: val.address,
  //   telp: val.telp,
  //   hp: val.hp,
  //   fax: val.fax,
  //   CustomerId: null,
  // }), {
  //   onSuccess: async () => {
  //     await queryClient.invalidateQueries(`${ENDPOINT}/${id}/profile`);
  //     setMutate(false);
  //   },
  //   onMutate: () => {
  //     setErrMsg({});
  //     setMutate(true);
  //   },
  //   onError: async ({ response }: { response: AxiosResponse }) => {
  //     setErrMsg({
  //       ...errMsg,
  //       status: response.status,
  //       statusText: response.statusText,
  //       message: response.data.message,
  //     });
  //     setMutate(false);
  //   },
  // });

  // const onClickDelete = async (formData) => {
  //   await Mutation.mutate(formData);
  // };

  // return (
  //   <>
  //     <Col>
  //       <Row className="py-2">
  //         <Col>
  //           <Button variant="primary" size="sm" className="lh-base shadow-sm" onClick={() => navigate(-1)}>
  //             <ChevronLeft />
  //             {' '}
  //             Go Back
  //           </Button>
  //         </Col>
  //       </Row>
  //       <Row className="py-2">
  //         <Col>
  //           <Card className="shadow-sm">
  //             <Card.Body>
  //               <Card.Title className="d-flex justify-content-between lh-base">
  //                 Profile
  //                 <Button variant="success" size="sm" onClick={() => setModalShow(true)}>
  //                   <i className="bi bi-pen-fill" />
  //                   {' '}
  //                   Add
  //                 </Button>
  //               </Card.Title>
  //               <hr />
  //               <Modal
  //                 show={modalShow}
  //                 onHide={() => setModalShow(false)}
  //               />
  //               {isSuccess && (
  //               <TableProfile
  //                 data={data.data.data.Profiles}
  //                 onClickDelete={onClickDelete}
  //                 isMutate={isMutate}
  //               />
  //               )}
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       </Row>
  //       <Row className="py-2">
  //         <Col>
  //           <Card className="shadow-sm">
  //             <Card.Body>
  //               <Card.Title className="d-flex justify-content-between lh-base">
  //                 Person In Charge (GROUP)
  //                 <LinkContainer to={ENDPOINT}>
  //                   <Button variant="success" size="sm">
  //                     <i className="bi bi-pen-fill" />
  //                     {' '}
  //                     Add
  //                   </Button>
  //                 </LinkContainer>
  //               </Card.Title>
  //               <hr />
  //               {/* <TableProfile
  //                 data={data.data.data}
  //                 onClickDelete={onClickDelete}
  //                 onClickEdit={onClickEdit}
  //                 isMutate={isMutate}
  //               /> */}
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Col>
  //     <Col lg={2}>
  //       <Row className="py-2">
  //         <Col>
  //           <Card className="shadow-sm">
  //             <Card.Body>
  //               <PersonCircle size={100} color="rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity))" className="card-img mb-2" />
  //               {isSuccess && <Card.Title className="text-center lh-base">{data.data.data.name}</Card.Title>}
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Col>
  //   </>
  // );
  return <div>Loading...</div>;
}

export default ReadGroup;
