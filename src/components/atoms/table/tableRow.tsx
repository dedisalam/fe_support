import React from 'react';
import type { TableRow as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <tr>{children}</tr>
  );
}
