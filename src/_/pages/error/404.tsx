import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function NotFound() {
  document.body.classList.add('bg-secondary');
  document.body.classList.add('bg-gradient');
  document.body.classList.add('bg-opacity-25');

  return (
    <>
      {/* Content */}
      <Col>
        <Row className="py-2">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Col className="d-flex justify-content-between">
                  <Card.Title>404 Not Found</Card.Title>
                </Col>
                <hr />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default NotFound;
