import React from 'react';
import type { TableHeader as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <th>{children}</th>
  );
}
