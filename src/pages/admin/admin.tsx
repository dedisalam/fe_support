import React from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import { Card as CardMolecule, Layout } from '@molecules';

export default function Component(): JSX.Element {
  return (
    <Layout.Row1Col5>
      <CardMolecule.Menu icon={PersonCircle} title="Users" links="/admin/users" />
    </Layout.Row1Col5>
  );
}
