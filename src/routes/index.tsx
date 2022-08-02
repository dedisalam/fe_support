import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Admin } from '@pages';
import Templates from '@templates';
import Route from './admin';

export default function Routes(): RouteObject[] {
  return [
    {
      index: true,
      element: <Admin.User.Login />,
    },
    {
      path: 'admin',
      element: <Templates />,
      children: Route(),
    },
  ];
}
