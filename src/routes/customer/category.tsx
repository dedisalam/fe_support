import React from 'react';
import { Route } from 'react-router-dom';
import {
  Create,
  Read,
  Update,
} from '_/pages/customer/category';

function Category() {
  return (
    <>
      <Route path="categories" element={<Read />} />
      <Route path="category">
        <Route index element={<Create />} />
        <Route path=":id" element={<Update />} />
      </Route>
    </>
  );
}

export default Category;
