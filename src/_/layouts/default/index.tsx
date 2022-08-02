import React from 'react';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import { Outlet } from 'react-router';
import SidebarMenu from '_/molecules/menu';
import NavbarOrganisms from '_/organisms/navbar';

type DefaultLayoutProps = {
  data: {
    user: {
      email: string;
    };
  };
};

function Default(props: DefaultLayoutProps) {
  const { data } = props;
  return (
    <>
      <NavbarOrganisms user={data.user} />
      <Container className="vh-100">
        <Row className="py-2">
          {/* Sidebar */}
          <Col md={3} lg={2}>
            <Row className="py-2">
              <Col>
                <Card className="shadow-sm">
                  <SidebarMenu />
                </Card>
              </Col>
            </Row>
          </Col>
          <Outlet />
        </Row>
      </Container>
    </>
  );
}

export default Default;
