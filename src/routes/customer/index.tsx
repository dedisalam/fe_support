import React from 'react';
import { Route } from 'react-router-dom';
import {
  Create, Read, ReadDetail, ReadGroup, Update,
} from '_/pages/customer';
import Category from './category';
import Pic from './pic';
import Profile from './profile';
import Service from './service';

function Customer() {
  return (
    <>
      <Route path="customers" element={<Read />} />
      <Route path="customer">
        <Route index element={<Create />} />
        <Route path="update/:id" element={<Update />} />
        <Route path=":idGroup/:idCustomer" element={<ReadDetail />} />
        <Route path=":id" element={<ReadGroup />} />

        {Category()}
        {Pic()}
        {Profile()}
        {Service()}
      </Route>
    </>
  );
}

export default Customer;
