import React from 'react';
import { Layout } from '@molecules';
import { Card } from '@organisms';

export default function Component(): JSX.Element {
  return (
    <Layout.Row1Col1>
      <Card.Table title="User" links="/admin/user" />
    </Layout.Row1Col1>
  );
}
