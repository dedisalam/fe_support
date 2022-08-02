import React from 'react';
import type { TableHead as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <thead>{children}</thead>
  );
}
