import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css';


function NavScrollExample() {
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
              <NavDropdown.Item href="/Lautapelit">Lautapelit</NavDropdown.Item>
              <NavDropdown.Item href="/Konsolipelit">
               Konsolipelit
              </NavDropdown.Item>
              <NavDropdown.Item href="/Tietokonepelit">Tietokonepelit</NavDropdown.Item>
              <NavDropdown.Item href="/Tarvikkeet">Tarvikkeet</NavDropdown.Item>
              <NavDropdown.Item href="/Uutuudet">Uutuudet</NavDropdown.Item>
              <NavDropdown.Divider />
            
            </NavDropdown>

            

            <NavDropdown className='etu' title="Asiakaspalvelu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Contact">Yhteydenottolomake</NavDropdown.Item>
              <NavDropdown.Item href="/Returning">Palautukset</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link  href= "/Ostoskori.js">
            <i class="bi bi-cart"></i>
            </Nav.Link>

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
            <Nav.Link  href= "./SearchBar.js">
            <i class="bi bi-search"></i>
            </Nav.Link>
          {/*</Form>*/}

          <a href="src/components/registration.php" target="_blank">
          <Button> Login </Button></a>

          { ' ' }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;