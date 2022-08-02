import React from 'react';
import { Card, Form, Layout } from '@organisms';

export default function Component(): JSX.Element {
  return (
    <Layout.Form>
      <Card title="User">
        <Form.User />
      </Card>
    </Layout.Form>
  );
}
