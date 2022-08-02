import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function Loading() {
  return (
    <Col>
      <Row className="py-2">
        <Col>
          <Card className="shadow-sm vh-100">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default Loading;
