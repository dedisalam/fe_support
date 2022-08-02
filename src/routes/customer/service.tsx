import React from 'react';
import { Route } from 'react-router-dom';
import {
  Create,
  Read,
  Update,
} from '_/pages/customer/service';

function Service() {
  return (
    <>
      {/* Service */}
      <Route path="services" element={<Read />} />
      <Route path="service">
        <Route index element={<Create />} />
        <Route path=":id" element={<Update />} />
      </Route>
    </>
  );
}

export default Service;
