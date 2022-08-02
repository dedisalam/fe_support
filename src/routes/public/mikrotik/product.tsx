import React from 'react';
import { Route } from 'react-router-dom';
import { Products as ReadProducts } from '_/pages/public/mikrotik';

function Product() {
  return (
    <>
      <Route path="products/:id" element={<ReadProducts />} />
      {/* <Route path="product/:id" element={<ReadProduct />} /> */}
    </>
  );
}

export default Product;
