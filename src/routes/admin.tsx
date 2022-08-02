import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Admin } from '@pages/';

export default function Routes(): RouteObject[] {
  return [
    {
      index: true,
      element: <Admin />,
    },
    {
      path: 'dashboard',
      element: <Admin.Dashboard />,
    },
    {
      path: 'users',
      element: <Admin.User />,
    },
    {
      path: 'user',
      element: <Admin.User.Create />,
    },
  ];
}
