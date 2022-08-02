import React from 'react';
import { Row } from 'react-bootstrap';
import type { Row as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const {
    children, className, xs, sm, md, lg, xl, xxl,
  } = props;

  let ClassName: string;
  if (className) {
    ClassName = ['p-1 g-2', className].join(' ');
  } else {
    ClassName = 'p-1 g-2';
  }

  return (
    <Row
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      className={ClassName}
    >
      {children}

    </Row>
  );
}
