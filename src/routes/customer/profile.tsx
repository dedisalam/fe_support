import React from 'react';
import { Route } from 'react-router-dom';
import {
  Create,
  Read,
  Update,
} from '_/pages/customer/profile';

function Profile() {
  return (
    <>
      {/* Profile */}
      <Route path="profiles" element={<Read />} />
      <Route path="profile">
        <Route index element={<Create />} />
        <Route path=":id" element={<Update />} />
      </Route>
    </>
  );
}

export default Profile;
