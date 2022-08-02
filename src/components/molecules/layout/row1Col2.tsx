import React from 'react';
import { Layout } from '@atoms';
import type { Row1Col2 as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { children, style } = props;

  let row1: I['style']['row1'];
  let col1: I['style']['col1'];
  let col2: I['style']['col2'];
  if (style) {
    row1 = style.row1;
    col1 = style.col1;
    col2 = style.col2;
  }

  return (
    <Layout.Row
      xs={row1 ? row1.xs : undefined}
      sm={row1 ? row1.sm : undefined}
      md={row1 ? row1.md : undefined}
      lg={row1 ? row1.lg : undefined}
      xl={row1 ? row1.xl : undefined}
      xxl={row1 ? row1.xxl : undefined}
      className={row1 ? row1.className : undefined}
    >
      <Layout.Col
        xs={col1 ? col1.xs : undefined}
        sm={col1 ? col1.sm : undefined}
        md={col1 ? col1.md : undefined}
        lg={col1 ? col1.lg : undefined}
        xl={col1 ? col1.xl : undefined}
        xxl={col1 ? col1.xxl : undefined}
        className={col1 ? col1.className : undefined}
      >
        {children[0]}
      </Layout.Col>
      <Layout.Col
        xs={col2 ? col2.xs : undefined}
        sm={col2 ? col2.sm : undefined}
        md={col2 ? col2.md : undefined}
        lg={col2 ? col2.lg : undefined}
        xl={col2 ? col2.xl : undefined}
        xxl={col2 ? col2.xxl : undefined}
        className={col2 ? col2.className : undefined}
      >
        {children[1]}
      </Layout.Col>
    </Layout.Row>
  );
}
