/* eslint-disable no-console */
import React from 'react';
import {
  Button, Card, Col, Row, Stack,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Vendor() {
  document.body.classList.add('bg-secondary');
  document.body.classList.add('bg-gradient');
  document.body.classList.add('bg-opacity-25');

  return (
    <>
      {/* Content */}
      <Col>
        <Row className="py-2">
          <Col sm={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-center">Mikrotik</Card.Title>
                <Card.Text>
                  MikroTik manufactures routers, switches and wireless systems
                  for every purpose, from small office or home, to carrier ISP
                  networks, there is a device for every purpose. See our product
                  catalog for a complete list of our products and their
                  features.
                </Card.Text>
                <Stack>
                  <LinkContainer to="/public/mikrotik/groups">
                    <Button variant="primary" type="button">
                      Show
                    </Button>
                  </LinkContainer>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Vendor;
