import React from 'react' 
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact'; 
import {NavLink, Link} from 'react-router-dom'; 
import {} from 'react-router-dom';

const URL = 'http://localhost:3000/admin/'

/* Luodaan erillinen sidebar admin osiolle*/
const Sidebar=()=>{
  return (
      <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
          <CDBSidebar textColer="#fff" backgroundColor="#00203FFF">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                  <Link to="/admin/AdminDashboard">Ylläpitäjät</Link>
              </CDBSidebarHeader>
              <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu>
                      <NavLink exact to="/admin/Readcontact" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              Näytä postit
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/AdminDashboard" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              Näytä tilaukset
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/admin/AddOffers" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                             Lisää tarjoukset
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/AdminDashboard" activeClassName="activeClicked">
                           <CDBSidebarMenuItem icon="columns">
                              Käyttäjät ja adminit
                          </CDBSidebarMenuItem>
                      </NavLink>
                  </CDBSidebarMenu>
              </CDBSidebarContent>
              <CDBSidebarFooter style={{textAlign:'center'}}>
                  <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
                      RGH
                  </div>
              </CDBSidebarFooter>
          </CDBSidebar>
      </div>
  )
}

export default Sidebar;