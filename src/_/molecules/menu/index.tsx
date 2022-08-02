import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function SidebarMenu() {
  const data = {
    activeKey: '#dashboard',
    items: [
      {
        id: 1,
        key: '#dashboard',
        name: 'Dashboard',
        links: '/admin/dashboard',
      },
      {
        id: 2,
        key: '#user',
        name: 'Users',
        links: '/admin/users',
      },
      {
        id: 3,
        key: '#customer',
        name: 'Customers',
        links: '/customers',
      },
      {
        id: 4,
        key: '#public',
        name: 'Public',
        links: '/public',
      },
    ],
  };
  return (
    <ListGroup variant="flush" activeKey={data.activeKey}>
      {data.items.map((item) => (
        <LinkContainer key={item.id} to={item.links}>
          <ListGroup.Item action href={item.key}>
            {item.name}
          </ListGroup.Item>
        </LinkContainer>
      ))}
    </ListGroup>
  );
}

export default SidebarMenu;
