import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Tuotteet from '../pages/Tuotteet';
import '../styles/Navbar.css';
import {useNavigate} from 'react-router-dom';
import Cart from '../pages/Cart';
const URL = 'http://localhost/webshop/php/';


function NavBar({url, Cart}) {
  const navigate=useNavigate();
  const [tuoteryhma, setTuoteryhma] = useState([]);

  useEffect(() => {

    const json = '{}';

    axios.get(URL + 'products/gettuoteryhma.php', json, {
      headers: {
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => {
        const json = response.data;
        setTuoteryhma(json);
        console.log(json);

      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

  const [search, setSearch] = useState([]);

  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      console.log(search)
      navigate('/Search/' + search);
    }
  } 


  return (
    <Navbar className='navbar-custom' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Retrogamershaven</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='etu' href="/">Etusivu</Nav.Link>

            <NavDropdown className='etu' title="Tuoteryhmät" id="navbarScrollingDropdown">
              {tuoteryhma.map(tuoteryhma => (
                <NavDropdown.Item key='tuoteryhma.trnro' href={"/Tuotteet/" + tuoteryhma.trnro}>{tuoteryhma.trnimi} </NavDropdown.Item>
              ))}

              <NavDropdown.Divider />

            </NavDropdown>

            <NavDropdown className='etu' title="Asiakaspalvelu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Contact">Yhteydenottolomake</NavDropdown.Item>
              <NavDropdown.Item href="/Returning">Palautukset</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown className='etu' title="Asiakas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Loginpage">Kirjaudu</NavDropdown.Item>
              <NavDropdown.Item href="/Signup">Luo tunnus</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            
           {/*  <i class="bi bi-search"></i> */}
         
        
                <input
                    value={search}
      
                    onChange={(e)=>setSearch(e.target.value)}
                    onKeyPress={(e)=>executeSearch(e)}
                    className="form-control"
                    type="search"
                    placeholder="Etsi tuotteita"
                    aria-label='Search'
                />           
             
   
             
         
       
            <Nav.Link href="../admin/AdminDashboard/" >
              Admin
            </Nav.Link>
          </Nav>

          <Nav.Link href="./Cart">
            <i class="bi bi-cart"></i>
          </Nav.Link>

          <Nav>

    
          </Nav>

          {' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
