import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import '../../styles/AdminDashboard.css';
import AdminLogin from '../admin/AdminLogin';
import AdminRegister from './AdminRegister';
import AddProduct from './AddProduct';
import Addryhma from './AddProduct';
import Sidebar from './AdminSideBar';
import Readcontact from './Readcontact';
import Nautaryhmat from './Nautaryhmat';
import Nauta from './Nauta';

const URL = 'http://localhost:3000/admin/'

/* Luodaan admin sivu*/
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
              <Route path='Nauta' element={ <Nauta />} />
              <Route path='Nautaryhmat' element={ <Nautaryhmat />} />
              
            </Routes>  }
        </div>
      <Sidebar />
              <Routes>
                 <Route path='Readcontact' element={ <Readcontact/>} />
              </Routes>
              
    </>
  )
}

export default AdminDashboard;
