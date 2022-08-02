import React from 'react';
import { Layout } from '@molecules';
import type { Row2Col2 as Props } from '@props/organisms';

export default function Component(props: Props): JSX.Element {
  const { children, style } = props;
  const {
    row1, row2, col1, col2, col3, col4,
  } = style;
  return (
    <>
      <Layout.Row1Col2 style={{ row1, col1, col2 }}>
        {children[0]}
        {children[1]}
      </Layout.Row1Col2>
      <Layout.Row1Col2 style={{ row1: row2, col1: col3, col2: col4 }}>
        {children[2]}
        {children[3]}
      </Layout.Row1Col2>
    </>
  );
}
