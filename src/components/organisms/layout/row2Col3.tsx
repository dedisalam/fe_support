import React from 'react';
import { Layout } from '@molecules';
import type { Row2Col3 as Props } from '@props/organisms';

export default function Component(props: Props): JSX.Element {
  const { children, style } = props;
  const {
    row1, row2, col1, col2, col3, col4, col5, col6,
  } = style;
  return (
    <>
      <Layout.Row1Col3 style={{
        row1, col1, col2, col3,
      }}
      >
        {children[0]}
        {children[1]}
        {children[2]}
      </Layout.Row1Col3>
      <Layout.Row1Col3 style={{
        row1: row2, col1: col4, col2: col5, col3: col6,
      }}
      >
        {children[3]}
        {children[4]}
        {children[5]}
      </Layout.Row1Col3>
    </>
  );
}
