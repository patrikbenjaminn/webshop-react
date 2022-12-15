import React from 'react' 
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact'; 
import {NavLink, Link} from 'react-router-dom'; 
import {} from 'react-router-dom';

const URL = 'http://localhost:3000/admin/'

const Sidebar=()=>{
  return (
      <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
          <CDBSidebar textColer="#fff" backgroundColor="#00203FFF">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                  <Link to={URL + "dashboard"}>Ylläpitäjät</Link>
              </CDBSidebarHeader>
              <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu>
                      <NavLink exact to={URL + "Readcontact"} activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              Näytä postit
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/dashboard" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                              Näytä tilaukset
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/dashboard" activeClassName="activeClicked">
                          <CDBSidebarMenuItem icon="columns">
                             Tarjous sivun tuotteet
                          </CDBSidebarMenuItem>
                      </NavLink>
                      <NavLink exact to="/dashboard" activeClassName="activeClicked">
                           <CDBSidebarMenuItem icon="columns">
                              Käyttäjät ja adminit
                          </CDBSidebarMenuItem>
                      </NavLink>
                  </CDBSidebarMenu>
              </CDBSidebarContent>
              <CDBSidebarFooter style={{textAlign:'center'}}>
                  <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
                      sidebar footer
                  </div>
              </CDBSidebarFooter>
          </CDBSidebar>
      </div>
  )
}

export default Sidebar;