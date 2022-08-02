import React from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { ChevronLeft, PersonCircle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { ENDPOINT } from './function';

function ReadDetail() {
  // const navigate = useNavigate();
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
  //               <Card.Title className="lh-base">
  //                 Profile
  //               </Card.Title>
  //               <hr />
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       </Row>
  //       <Row className="py-2">
  //         <Col>
  //           <Card className="shadow-sm">
  //             <Card.Body>
  //               <Card.Title className="d-flex justify-content-between lh-base">
  //                 Service
  //                 <LinkContainer to={ENDPOINT}>
  //                   <Button variant="success" size="sm">
  //                     <i className="bi bi-pen-fill" />
  //                     {' '}
  //                     Add
  //                   </Button>
  //                 </LinkContainer>
  //               </Card.Title>
  //               <hr />
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
  //               <Card.Title className="text-center lh-base">Shafira Sulanjana</Card.Title>
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Col>
  //   </>
  // );
  return <div>Loading...</div>;
}

export default ReadDetail;
