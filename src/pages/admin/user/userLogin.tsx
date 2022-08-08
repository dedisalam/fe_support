import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserLogin as Hooks } from "@hooks";
import { Alert, Card } from "@molecules";
import { Form } from "@organisms";

export default function Component(): JSX.Element {
  const { state, mutate } = Hooks();

  let alert: JSX.Element | null = null;
  if (state.error) {
    if (state.error.global) {
      alert = (
        <Alert.Error
          title={state.error.global ? state.error.global.title : ""}
          message={state.error.global ? state.error.global.message : ""}
        />
      );
    }
  }

  return (
    <Container fluid className="bg-secondary bg-gradient bg-opacity-25">
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col md={4}>
          <Card.Login>
            {process.env.BACKEND_URL}
            {alert}
            <Form.User.Login
              isLoading={state.isLoading}
              error={state.error ? state.error.local : undefined}
              onSubmit={(data: object) => {
                mutate(data);
              }}
            />
          </Card.Login>
        </Col>
      </Row>
    </Container>
  );
}
