import React from 'react';
import { Table } from '@atoms';
import type { Table as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { data = [{ id: 1, name: 'test' }] } = props;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          {
            Object.keys(data[0]).map((value) => (
              <Table.Header key={value}>{value}</Table.Header>
            ))
          }
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {
          data.map((row) => (
            <Table.Row key={row.id}>
              {
                Object.keys(row).map((value) => (
                  <Table.Data key={value}>{value}</Table.Data>
                ))
              }
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
}
