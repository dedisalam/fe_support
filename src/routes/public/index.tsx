import React from 'react';
import { Route } from 'react-router-dom';
import Mikrotik from './mikrotik';

function Public() {
  return <Route path="public">{Mikrotik()}</Route>;
}

export default Public;
