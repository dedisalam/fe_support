import React from 'react';
import { Route } from 'react-router-dom';
import Group from './group';
import Product from './product';

function Mikrotik() {
  return (
    <Route path="mikrotik">
      {Group()}
      {Product()}
    </Route>
  );
}

export default Mikrotik;
