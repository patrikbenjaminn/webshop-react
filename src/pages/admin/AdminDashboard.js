import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import '../../styles/AdminDashboard.css';
import AdminLogin from '../admin/AdminLogin';
import AdminRegister from './AdminRegister';
import AddProduct from './AddProduct';
import UpDateProduct from './UpDateProduct';

const URL = 'http://localhost/webshop/src/pages/admin/'; 

function AdminDashboard() {
  return (
    <>

      <AdminHeader url={URL} />
        <div className='page-id'>
            <Routes>        
              <Route path='/AdminLogin' element={ <AdminLogin />} />
              <Route path='/AdminRegister' element={ <AdminRegister />} />
              <Route path='/AddProduct' element={ <AddProduct />} />
              <Route path='/UpDateProduct' element={ <UpDateProduct />} />
            </Routes>  
        </div>
    </>
  )
}

export default AdminDashboard;
