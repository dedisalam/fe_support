import React from 'react';
import { Layout } from '@molecules';
import type { LayoutForm as Props } from '@props/organisms';

export default function Component(props: Props): JSX.Element {
  const { children } = props;
  return (
    <Layout.Row1Col1 style={{ col1: { xs: '2', lg: '6' } }}>
      {children}
    </Layout.Row1Col1>
  );
}
