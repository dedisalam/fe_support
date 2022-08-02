import React from 'react';
import { Card, Table } from '@molecules';
import type { CardTable as Props } from '@props/organisms';

export default function Component(props: Props): JSX.Element {
  const { title, links } = props;
  return (
    <Card.Button button={{ type: 'add', links }} title={title}>
      {/* {!isEmpty(error[0]) && <Alert.Error title="error" message="hi" />} */}
      <Table.Striped data={[{ id: 1, name: 'test' }]} />
    </Card.Button>
  );
}
