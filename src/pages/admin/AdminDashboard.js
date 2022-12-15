import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import '../../styles/AdminDashboard.css';
import AdminLogin from '../admin/AdminLogin';
import AdminRegister from './AdminRegister';
import AddProduct from './AddProduct';
import Addryhma from './AddProduct';
import Sidebar from './AdminSideBar';

const URL = 'http://localhost/webshop/src/pages/admin/'; 

function AdminDashboard() {
  return (
    <>

      <AdminHeader url={URL} />
        <div className='page-id'>
{            <Routes>        
              <Route path='AdminLogin' element={ <AdminLogin />} />
              <Route path='AdminRegister' element={ <AdminRegister />} />
              <Route path='AddProduct' element={ <AddProduct />} />
              <Route path='Addryhma' element={ <Addryhma />} />
            </Routes>  }
        </div>
      <Sidebar />
    </>
  )
}

export default AdminDashboard;
