import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Tuotteet from '../pages/Tuotteet';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import AdminRegister from '../pages/admin/AdminRegister';

const URL = 'http://localhost/webshop/php/';


function NavBar({url, cart}) {
  const Navigate=useNavigate();
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
        

      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

const [search, setSearch] = useState([]);

  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      console.log(search)
      Navigate('/Search/' + search);
    }
  } 


  return (
    <Navbar className='navbar-custom' expand="lg">
      <Container fluid>
        <Navbar.Brand className='retro' href="/">Retrogamershaven</Navbar.Brand>
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

            <Nav.Link className='etu' href="../admin/Admin/" >
              Admin
            </Nav.Link>
            <Nav.Link className='etu' href="/admin/AdminRegister"  hidden>
              AdReq
            </Nav.Link>
          </Nav>
          <input
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    onKeyPress={(e)=>executeSearch(e)}
                    id="form-control"
                    type="search"
                    placeholder="Etsi tuotteita"
                    aria-label='Search'
                /> 
          
            <Cart cart={cart}/>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
