import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import type { ListGroupItem as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children, href, itemkey } = props;
  return (
    <LinkContainer to={href}>
      <ListGroup.Item action href={itemkey}>
        {children}
      </ListGroup.Item>
    </LinkContainer>
  );
}
