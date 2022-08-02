import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as Container } from '@atoms';
import { Layout } from '@molecules';
import { Navbar, Sidebar } from '@organisms';

export default function Templates(): JSX.Element {
  return (
    <>
      <Navbar />
      <Container className="py-1">
        <Layout.Row1Col2 style={{ col1: { md: '3', lg: '2' } }}>
          <Sidebar />
          <Outlet />
        </Layout.Row1Col2>
      </Container>
    </>
  );
}
