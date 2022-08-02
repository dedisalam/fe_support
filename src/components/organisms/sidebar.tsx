import React from 'react';
import { PeopleFill, PersonFill, Speedometer } from 'react-bootstrap-icons';
import { Card, ListGroup } from '@atoms';
import { Layout } from '@molecules';

export default function Component(): JSX.Element {
  const data = {
    activeKey: '#admin-dashboard',
    items: [
      {
        id: 1,
        key: '#admin-dashboard',
        name: 'Dashboard',
        links: '/admin/dashboard',
        icon: <Speedometer className="mb-1" size={17} />,
      },
      {
        id: 2,
        key: '#admin',
        name: 'Admin',
        links: '/admin',
        icon: <PersonFill className="mb-1" size={17} />,
      },
      {
        id: 3,
        key: '#customers',
        name: 'Customers',
        links: '/customers',
        icon: <PeopleFill className="mb-1" size={17} />,
      },
    ],
  };
  return (
    <Layout.Row1Col1>
      <Card>
        <ListGroup variant="flush" activeKey={data.activeKey}>
          {data.items.map((item) => (
            <ListGroup.Item key={item.id} href={item.links} itemkey={item.key}>
              {item.icon}
              {' '}
              {item.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Layout.Row1Col1>
  );
}
