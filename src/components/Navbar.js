import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* import Tuotteet from '../pages/Tuotteet' */
import '../styles/Navbar.css';


function NavBar({url}) {

  const [tuoteryhma, setTuoteryhma] = useState([]);

  useEffect(() => {
  
    axios.get(url + 'products/gettuoteryhma.php')
      .then((response) => {
        const json = response.data;
        setTuoteryhma(json);
       
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

  return (
    <Navbar className='navbar-custom'  expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">RetroGamersHaven</Navbar.Brand>
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
                <NavDropdown.Item  href={"/Tuotteet/" + tuoteryhma.trnro}>{tuoteryhma.trnimi} </NavDropdown.Item>
              ))}
                          
              <NavDropdown.Divider />
            
            </NavDropdown>

            

            <NavDropdown className='etu' title="Asiakaspalvelu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Contact">Yhteydenottolomake</NavDropdown.Item>
              <NavDropdown.Item href="/Returning">Palautukset</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            
            <NavDropdown className='etu' title="Asiakas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="./Login_php/login">Kirjaudu</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Luo tunnus</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            

            <Nav.Link href="/Admin.js" disabled hidden>
              Admin 
            </Nav.Link>
          
          </Nav>
               

          {/*<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Kirjoita hakusana"
              className="me-2"
              aria-label="Search"
          />*/}
            <Nav.Link  href= "/Ostoskori.js">
            <i class="bi bi-cart"></i>
            </Nav.Link>

            <Nav.Link  href= "./SearchBar.js">
            <i class="bi bi-search"></i>
            </Nav.Link>
          {/*</Form>*/}

      

          { ' ' }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;