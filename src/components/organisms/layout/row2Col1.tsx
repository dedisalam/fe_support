import React from 'react';
import { Layout } from '@molecules';
import type { Row2Col1 as Props } from '@props/organisms';

export default function Component(props: Props): JSX.Element {
  const { children, style } = props;
  const {
    row1, row2, col1, col2,
  } = style;

  return (
    <>
      <Layout.Row1Col1 style={{ row1, col1 }}>
        {children[0]}
      </Layout.Row1Col1>
      <Layout.Row1Col1 style={{ row1: row2, col1: col2 }}>
        {children[1]}
      </Layout.Row1Col1>
    </>
  );
}
