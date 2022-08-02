import React from 'react';
import { Route } from 'react-router-dom';
import { Group as ReadGroups } from '_/pages/public/mikrotik';

function Group() {
  return <Route path="groups" element={<ReadGroups />} />;
}

export default Group;
