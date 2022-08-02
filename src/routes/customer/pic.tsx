import React from 'react';
import { Route } from 'react-router-dom';
import { Create, Read, Update } from '_/pages/customer/pic';

function Pic() {
  return (
    <>
      {/* Pic */}
      <Route path="pics" element={<Read />} />
      <Route path="pic">
        <Route index element={<Create />} />
        <Route path=":id" element={<Update />} />
      </Route>
    </>
  );
}

export default Pic;
