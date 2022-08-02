import React from 'react';
import { Card } from '@molecules';
import type { Card as Props } from '@props/organisms';

export default function Component(props: Props): JSX.Element {
  const { title, children } = props;
  return (
    <Card title={title}>
      {children}
    </Card>
  );
}
