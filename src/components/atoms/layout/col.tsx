import React from 'react';
import { Col } from 'react-bootstrap';
import type { Col as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const {
    children, xs, sm, md, lg, xl, xxl, className,
  } = props;
  return (
    <Col
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      className={className}
    >
      {children}
    </Col>
  );
}
