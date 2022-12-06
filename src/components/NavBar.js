import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tuotteet from '../pages/Tuotteet';
import '../styles/Navbar.css';
import { Navigate } from 'react-router-dom';

const URL = 'http://localhost/webshop/php/';


function NavBar() {

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
      Navigate('/Search/' + search);
    }
  }


  return (
    <Navbar className='navbar-custom' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">RGH</Navbar.Brand>
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

            <Nav.Link href="/admin/Admin" disabled hidden>
              Admin
            </Nav.Link>
          </Nav>

          <Nav.Link href="./Cart">
            <i class="bi bi-cart"></i>
          </Nav.Link>

          <Nav>

            {<form className="form-inline my-2 my-lg-0">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => executeSearch(e)}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Etsi tuotteita"
                aria-label='/Search' />
            </form>}
          </Nav>

          {' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
