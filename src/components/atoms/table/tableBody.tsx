import React from 'react';
import type { TableBody as Props } from '@props/atoms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <tbody>{children}</tbody>
  );
}
