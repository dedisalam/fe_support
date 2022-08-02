import React from 'react';
import type { TableData as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <td>{children}</td>
  );
}
