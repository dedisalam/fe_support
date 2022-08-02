import React from 'react';
import { Button, Card, Stack } from '@atoms';
import type { CardMenu as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { title, links, icon: Icon } = props;
  return (
    <Card bg="primary" className="overflow-hidden bg-gradient">
      <Icon
        size={180}
        color="white"
        className="position-absolute top-50 start-50 translate-middle-y opacity-25"
      />
      <Card.Body className="position-relative">
        <Card.Title className="text-center text-white lh-base">{title}</Card.Title>
        <hr className="border border-2 border-white" />
        <Stack>
          <Button variant="light" className="bg-gradient shadow-sm text-primary fw-bold" href={links}>Show</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
